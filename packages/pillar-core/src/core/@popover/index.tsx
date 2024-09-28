import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { useClickOutside } from '@pillar-ui/hooks'

import type { Align, PopoverProps } from './popover.type'

const calculateSpaceAroundElement = (rect: DOMRect) => {
  const { clientHeight, clientWidth } = document.documentElement
  const viewportHeight = window.innerHeight || clientHeight
  const viewportWidth = window.innerWidth || clientWidth
  const { bottom, left, right, top } = rect

  return {
    bottom: viewportHeight - bottom,
    top: top,
    left: left,
    right: viewportWidth - right,
  }
}

const calculatePosition = (
  triggerRect: DOMRect,
  popoverRect: DOMRect,
  align: Align,
  position: 'top' | 'bottom' | 'left' | 'right',
  offset: number
) => {
  const space = calculateSpaceAroundElement(triggerRect)
  const isCollapsible = {
    above: space.top < popoverRect.height,
    below: space.bottom < popoverRect.height,
    right: space.right < popoverRect.width,
    left: space.left < popoverRect.width,
  }

  const calculateInlinePosition = () =>
    align === 'start'
      ? triggerRect.left
      : align === 'end'
        ? triggerRect.right - popoverRect.width
        : triggerRect.left + (triggerRect.width - popoverRect.width) / 2

  const calculateBlockPosition = () =>
    align === 'start'
      ? triggerRect.top
      : align === 'end'
        ? triggerRect.bottom - popoverRect.height
        : triggerRect.top + (triggerRect.height - popoverRect.height) / 2

  const positions = {
    top: {
      top: !isCollapsible.above ? triggerRect.top - popoverRect.height - offset : triggerRect.bottom + offset,
      left: calculateInlinePosition(),
    },
    bottom: {
      top: isCollapsible.below ? triggerRect.top - offset : triggerRect.bottom + offset,
      left: calculateInlinePosition(),
    },
    left: {
      top: calculateBlockPosition(),
      left: isCollapsible.left ? triggerRect.right + offset : triggerRect.left - popoverRect.width - offset,
    },
    right: {
      top: calculateBlockPosition(),
      left: isCollapsible.right ? triggerRect.left - popoverRect.width - offset : triggerRect.right + offset,
    },
  }

  return positions[position]
}

export function Popover({
  triggerElement,
  children,
  position = 'bottom',
  size,
  isOpen,
  align = 'center',
  width = 'full',
  onClose,
  corner = '2',
  offset = 5,
}: PopoverProps) {
  const [popoverStyle, setPopoverStyle] = useState({})
  const popoverRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    },
    [onClose]
  )

  useClickOutside(triggerElement, onClose)

  const updatePosition = useCallback(() => {
    if (!isOpen || !triggerElement.current || !popoverRef.current) return

    const triggerRect = triggerElement.current.getBoundingClientRect()
    const popoverRect = popoverRef.current.getBoundingClientRect()

    const { top, left } = calculatePosition(triggerRect, popoverRect, align, position, offset)

    setPopoverStyle({
      top: `${top + window.scrollY}px`,
      left: `${left + window.scrollX}px`,
    })
  }, [isOpen, triggerElement, align, position, offset])

  useLayoutEffect(updatePosition, [updatePosition])

  useEffect(() => {
    window.addEventListener('resize', updatePosition)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [updatePosition, handleKeyDown])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div ref={popoverRef} className={`p-o p-o-${width} Fs${size} R${corner}`} style={popoverStyle}>
      <div className="p-o_c">{children}</div>
    </div>,
    document.body
  )
}
