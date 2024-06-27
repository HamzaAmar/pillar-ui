import { useEffect } from 'react'
import { usePersistentCallback } from '../usePersistentCallback'

/**
 * Custom hook for adding an event listener with automatic cleanup in React components.
 * The provided handler is persisted to avoid unnecessary re-renders.
 *
 * @param {string} eventName - The name of the event to listen for (e.g., 'click', 'keydown', etc.).
 * @param {EventListener} handler - The event handler function to be executed when the event occurs.
 * @param {boolean | AddEventListenerOptions} options - Optional event listener options or a boolean to use capture.
 *
 * @example
 * // Example usage in a functional component:
 * import { useEventListener } from '@pillar-ui/hooks'; // Adjust the path accordingly
 *
 * function EventListenerComponent() {
 *   const handleClick = (event) => {
 *     console.log('Clicked!', event);
 *   };
 *
 *   useEventListener('click', handleClick);
 *
 *   return (
 *     <div>
 *       Click anywhere to see the event log.
 *     </div>
 *   );
 * }
 */

export const useEventListener = (
  eventName: string,
  handler: EventListener,
  options: boolean | AddEventListenerOptions
) => {
  const persistedHandler = usePersistentCallback(handler)

  useEffect(() => {
    const eventListener = (event: Event) => {
      if (persistedHandler) {
        persistedHandler(event)
      }
    }

    document.addEventListener(eventName, eventListener, options)

    return () => {
      document.removeEventListener(eventName, eventListener, options)
    }
  }, [eventName, options, persistedHandler])
}

export default useEventListener
