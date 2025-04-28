import { useEffect } from 'react'
import type { RefObject } from 'react'
/**
 * A custom React hook to listen for clicks outside a specified DOM element.
 *
 * @template T - The type of the DOM element (default is `HTMLElement`).
 *
 * @param {(event: Event) => void} handler - The handler function to be executed when a click outside the element occurs.
 *
 * @returns {React.RefObject<T>} - A ref object that should be attached to the DOM element you want to track clicks outside of.
 */

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const el = ref.current

      if (el && !el.contains(event.target as Node)) {
        handler(event)
      }
    }
    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('click', listener)
    }
  }, [handler, ref])

  return ref
}
