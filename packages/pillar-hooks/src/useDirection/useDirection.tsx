import { useEffect, useState } from 'react'

type Direction = 'ltr' | 'rtl'
const DIRECTION = 'direction'

const codeToRunOnHead = `function(){alert('Hello')}`

/**
 * Custom hook for managing the direction (LTR/RTL) of the document or a specified HTML element.
 * @param {HTMLElement} [element] - Optional HTML element to track the direction for. If not provided, the direction of the document's root element will be used.
 * @returns {{
 *  isLtr {boolean} - Indicates whether the current direction is LTR (true) or RTL (false).
 *  direction {Direction} - The current direction ('ltr', 'rtl', or undefined).
 *  directionScript {ReactElement} - React element containing the code to run on the head.
 *  toggleDirection {function} - Toggles the direction between LTR and RTL.
 * }}
 */

export function getDirectionInitial(element: HTMLElement): Direction {
  const rootDirection = window.getComputedStyle(element).direction as Direction
  const localStorageMode = localStorage.getItem?.(DIRECTION) as Direction
  return localStorageMode ?? rootDirection
}

export function useDirection(element?: HTMLElement) {
  const [direction, setDirection] = useState<Direction | undefined>(undefined)

  useEffect(() => {
    const root = element ?? document.documentElement
    const direction = getDirectionInitial(root)
    root.dir = direction
    setDirection(direction)
  }, [element])

  /**
   * Toggles the direction between LTR and RTL.
   */

  function toggleDirection() {
    const root = element ?? document.documentElement

    setDirection((direction) => {
      const nextDirection = direction === 'ltr' ? 'rtl' : 'ltr'
      root.dir = nextDirection
      window.localStorage.setItem(DIRECTION, nextDirection)
      return nextDirection
    })
    root.dir = direction === 'ltr' ? 'rtl' : 'ltr'
  }
  const isLtr = direction === 'ltr' ? true : false
  const directionScript = <script dangerouslySetInnerHTML={{ __html: codeToRunOnHead }} />
  return { isLtr, direction, directionScript, toggleDirection }
}
