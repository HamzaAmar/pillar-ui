import { useEffect } from 'react'
import { usePersistentCallback } from '../usePersistentCallback'

/**
 * Custom hook for adding an event listener with automatic cleanup in React components.
 * The provided handler is persisted to avoid unnecessary re-renders.
 *
 * @param {string} eventName - The name of the event to listen for (e.g., 'click', 'keydown', etc.).
 * @param {EventListener} handler - The event handler function to be executed when the event occurs.
 * @param {boolean | AddEventListenerOptions} options - Optional event listener options or a boolean to use capture.
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
