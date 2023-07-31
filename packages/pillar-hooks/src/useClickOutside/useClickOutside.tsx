import { useRef, useEffect } from 'react'

/**
 * A custom React hook to listen for clicks outside a specified DOM element.
 *
 * @template T - The type of the DOM element (default is `HTMLElement`).
 *
 * @param {(event: Event) => void} handler - The handler function to be executed when a click outside the element occurs.
 *
 * @returns {React.RefObject<T>} - A ref object that should be attached to the DOM element you want to track clicks outside of.
 *
 * @example
 * // Example usage in a functional component:
 * import { useState } from 'react';
 *
 * function ClickOutsideComponent() {
 *   const [isOpen, setOpen] = useState(false);
 *
 *   const handleOutsideClick = () => {
 *     setOpen(false);
 *   };
 *
 *   const outsideRef = useClickOutside(handleOutsideClick);
 *
 *   return (
 *     <div>
 *       <button onClick={() => setOpen(!isOpen)}>Toggle Menu</button>
 *       {isOpen && (
 *         <div ref={outsideRef} style={{ border: '1px solid black', padding: '10px' }}>
 *           Click outside this box to close the menu.
 *         </div>
 *       )}
 *     </div>
 *   );
 * }
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
