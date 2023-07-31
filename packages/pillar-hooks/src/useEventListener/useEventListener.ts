import { useEffect } from 'react'
import { usePersistentCallback } from '../usePersistentCallback'

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
