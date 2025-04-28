import { useEffect, useState } from 'react'

type Direction = 'ltr' | 'rtl'
const DIRECTION = 'direction'

export function getDirectionInitial(element: HTMLElement): Direction {
  const rootDirection = window.getComputedStyle(element).direction as Direction
  const localStorageMode = localStorage.getItem?.(DIRECTION) as Direction
  return localStorageMode ?? rootDirection
}

/**
 * Custom hook for managing text direction (LTR/RTL) state and toggling between them.
 *
 * @param {HTMLElement} [element] - The optional element to apply direction changes.
 * @returns {{
 *   isLtr: boolean,
 *   direction: Direction,
 *   directionScript: JSX.Element,
 *   toggleDirection: () => void
 * }} - An object containing text direction state, direction toggling function, and direction script element.
 */

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
  return { isLtr, direction, toggleDirection }
}
