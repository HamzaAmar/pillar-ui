import { useState, useCallback } from 'react'

/**
 * A custom React hook to track the hover state of an element.
 *
 * @returns {{ hoverHandlers: { onMouseEnter: () => void, onMouseLeave: () => void }, isHovered: boolean }}
 *   An object containing hover event handlers and the current hover state.
 *   - hoverHandlers: An object with `onMouseEnter` and `onMouseLeave` event handlers.
 *   - isHovered: A boolean representing the current hover state of the element.
 *
 * @example
 * function MyComponent() {
 *   const { hoverHandlers, isHovered } = useHover();
 *
 *   return (
 *     <div {...hoverHandlers}>
 *       {isHovered ? 'Hovered' : 'Not Hovered'}
 *     </div>
 *   );
 * }
 */
export function useHover() {
  const [isHovered, setIsHovered] = useState(false)

  const onMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const onMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const hoverHandlers = {
    onMouseEnter,
    onMouseLeave,
  }

  return { hoverHandlers, isHovered }
}
