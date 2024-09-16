import { useState, useEffect } from 'react'

/**
 * Custom hook for tracking the dimensions of an HTMLElement using the ResizeObserver API in React components.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - A ref object pointing to the target HTMLElement.
 *
 * @returns {ElementSize} - An object containing various dimension properties of the element.
 *
 * @example
 * // Example usage in a functional component:
 * import { useRef } from 'react';
 * import { useDimension } from '@pillar-ui/hooks'; // Adjust the path accordingly
 *
 * function DimensionComponent() {
 *   const elementRef = useRef(null);
 *   const size = useDimension(elementRef);
 *
 *   return (
 *     <div ref={elementRef}>
 *       <p>Element Width: {size.width}px</p>
 *       <p>Element Height: {size.height}px</p>
 *     </div>
 *   );
 * }
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
