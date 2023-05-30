import { useRef, useEffect } from 'react'

/**
 * Custom hook for detecting clicks outside of a specified element.
 * @template T - The type of the element ref, which extends HTMLElement.
 * @param {(event: Event) => void} handler - The callback function to execute when a click outside is detected.
 * @returns {React.MutableRefObject<T | undefined>} - The ref object that should be attached to the element.
 */

export const useClickOutside = <T extends HTMLElement = HTMLElement>(handler: (event: Event) => void) => {
  const ref = useRef<T>()

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const { target } = event ?? {}
      const el = ref.current

      if (el && !el.contains(target as Node)) {
        handler(event)
      }
    }
    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('click', listener)
    }
  }, [handler])

  return ref
}
