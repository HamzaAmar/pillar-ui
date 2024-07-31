import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { useClickOutside } from '@pillar-ui/hooks'

import type { Align, PopoverProps } from './popover.type'

function calculateSpaceAroundElement(rect: DOMRect) {
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth

  return {
    belowSpace: viewportHeight - rect.bottom,
    upSpace: rect.top,
    leftSpace: rect.left,
    rightSpace: viewportWidth - rect.right,
  }
}

function calculateInlinePosition(triggerRect: DOMRect, popoverRect: DOMRect, align: Align) {
  if (align === 'start') {
    return triggerRect.left + window.scrollX
  } else if (align === 'center') {
    return triggerRect.left + window.scrollX + (triggerRect.width - popoverRect.width) / 2
  } else {
    return triggerRect.right - popoverRect.width + window.scrollX
  }
}

function calculateBlockPosition(triggerRect: DOMRect, popoverRect: DOMRect, align: Align) {
  if (align === 'start') {
    return triggerRect.top + window.scrollY
  } else if (align === 'center') {
    return triggerRect.top + window.scrollY + (triggerRect.height - popoverRect.height) / 2
  } else {
    return triggerRect.bottom - popoverRect.height + window.scrollY
  }
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
  corner = 'sm',
  offset = 5,
}: PopoverProps) {
  const [popoverStyle, setPopoverStyle] = useState({})
  const [positionStyle, setPositionStyle] = useState({})
  const popoverRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  const handleClose = () => {
    onClose()
  }

  useClickOutside(triggerElement, handleClose)

  const calculatePosition = useCallback(() => {
    if (!isOpen) return

    const triggerRect = triggerElement.current?.getBoundingClientRect() ?? ({} as DOMRect)
    const popoverRect = popoverRef.current?.getBoundingClientRect() ?? ({} as DOMRect)

    const popoverHeight = popoverRect.height
    const popoverWidth = popoverRect.width

    let top = triggerRect.top - popoverHeight
    let left = triggerRect.left - popoverWidth
    let bottom = triggerRect.bottom
    let right = triggerRect.right

    const { belowSpace, leftSpace, rightSpace, upSpace } = calculateSpaceAroundElement(triggerRect)

    const isCollapsibleAbove = upSpace < popoverHeight
    const isCollapsibleBelow = belowSpace < popoverHeight
    const isCollapsibleRight = rightSpace < popoverWidth
    const isCollapsibleLeft = leftSpace < popoverWidth

    switch (position) {
      case 'top':
        top = !isCollapsibleAbove ? top - offset : bottom + offset
        left = calculateInlinePosition(triggerRect, popoverRect, align)
        break
      case 'left':
        top = calculateBlockPosition(triggerRect, popoverRect, align)
        left = isCollapsibleLeft ? right + offset : left - offset
        break
      case 'bottom':
        top = isCollapsibleBelow ? top - offset : bottom + offset
        left = calculateInlinePosition(triggerRect, popoverRect, align)
        break
      case 'right':
        top = calculateBlockPosition(triggerRect, popoverRect, align)
        left = isCollapsibleRight ? left - offset : right + offset
        break
      default:
        top = triggerRect.bottom + offset
        left = triggerRect.left + offset
        setPositionStyle({})
        break
    }

    setPopoverStyle({
      top: `${top}px`,
      insetInlineStart: `${left}px`,
    })
  }, [isOpen, position, triggerElement, align, offset])

  useLayoutEffect(() => {
    calculatePosition()
  }, [calculatePosition])

  useEffect(() => {
    window.addEventListener('resize', calculatePosition)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('resize', calculatePosition)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [calculatePosition, handleKeyDown])

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <div
            ref={popoverRef}
            className={`p-p p-p--${width} u_f-${size} u_rad-${corner}`}
            style={{ ...popoverStyle, ...positionStyle }}
          >
            <div className="p-p_c">{children}</div>
          </div>,
          document.body
        )}
    </>
  )
}
