import { useState, useEffect } from 'react'

/**
 * Custom hook for tracking the dimensions of an HTMLElement using the ResizeObserver API in React components.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - A ref object pointing to the target HTMLElement.
 *
 * @returns {ElementSize} - An object containing various dimension properties of the element.
 */

export const useDimension = (elementRef: React.RefObject<HTMLElement>) => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      setSize({ width, height })
    })

    resizeObserver.observe(element)
    return () => resizeObserver.disconnect()
  }, [elementRef])

  return size
}

interface BoxSize {
  top: number
  right: number
  bottom: number
  left: number
}

export interface ElementSize {
  width: number
  height: number
  padding: BoxSize
  margin: BoxSize
  border: BoxSize
  content: BoxSize
}
