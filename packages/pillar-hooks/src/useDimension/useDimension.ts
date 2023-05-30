import { useState, useEffect, useRef } from 'react'
import { ElementSize } from './useDimension.type'

/**
 * Custom hook for tracking the dimensions of an HTML element.
 * @param {React.RefObject<HTMLElement>} elementRef - Ref object for the HTML element to track.
 * @returns {ElementSize} - Object containing the dimensions and related properties of the tracked element.
 */

export const useDimension = (elementRef: React.RefObject<HTMLElement>): ElementSize => {
  const [size, setSize] = useState<ElementSize>({
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    border: { top: 0, right: 0, bottom: 0, left: 0 },
    content: { top: 0, right: 0, bottom: 0, left: 0 },
  })

  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect

      const { paddingTop, paddingRight, paddingBottom, paddingLeft } = getComputedStyle(element)
      const { marginTop, marginRight, marginBottom, marginLeft } = getComputedStyle(element)
      const { borderTopWidth, borderRightWidth, borderBottomWidth, borderLeftWidth } = getComputedStyle(element)

      const padding = {
        top: parseFloat(paddingTop),
        right: parseFloat(paddingRight),
        bottom: parseFloat(paddingBottom),
        left: parseFloat(paddingLeft),
      }

      const margin = {
        top: parseFloat(marginTop),
        right: parseFloat(marginRight),
        bottom: parseFloat(marginBottom),
        left: parseFloat(marginLeft),
      }

      const border = {
        top: parseFloat(borderTopWidth),
        right: parseFloat(borderRightWidth),
        bottom: parseFloat(borderBottomWidth),
        left: parseFloat(borderLeftWidth),
      }

      const content = {
        top: padding.top + border.top,
        right: padding.right + border.right,
        bottom: padding.bottom + border.bottom,
        left: padding.left + border.left,
      }

      setSize({
        width,
        height,
        padding,
        margin,
        border,
        content,
      })
    })

    resizeObserver.observe(element)
    resizeObserverRef.current = resizeObserver

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
        resizeObserverRef.current = null
      }
    }
  }, [elementRef])

  return size
}
