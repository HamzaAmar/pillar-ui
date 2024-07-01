import { useState } from 'react'

export interface MousePosition {
  x: number
  y: number
}

/**
 * A custom React hook to track the mouse position.
 *
 * @returns {{ position: MousePosition, onMouseMove: (event: MouseEvent) => void }}
 *   An object containing the current mouse position and the `onMouseMove` event handler.
 *   - position: An object with `x` and `y` properties representing the current mouse coordinates.
 *   - onMouseMove: The event handler to update the mouse position when the mouse moves.
 *
 * @example
 * function MyComponent() {
 *   const { position, onMouseMove } = useMouseMove();
 *
 *   return (
 *     <div onMouseMove={onMouseMove}>
 *       Mouse position: {position.x}, {position.y}
 *     </div>
 *   );
 * }
 */
export function useMouseMove() {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })

  const onMouseMove = (event: MouseEvent) => {
    const x = event.pageX ?? 0
    const y = event.pageY ?? 0
    setPosition({ x, y })
  }

  return { position, onMouseMove }
}
