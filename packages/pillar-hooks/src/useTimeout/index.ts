import { useEffect, useRef, useCallback } from 'react'
import { usePersistentCallback } from '../usePersistentCallback'

export type TimeoutType = ReturnType<typeof setTimeout> | null
type TimeoutHandler = () => void

export const useTimeout = (callback: TimeoutHandler, delay: number = 150) => {
  const savedCallback = useRef<TimeoutHandler>()
  const timerRef = useRef<TimeoutType>(null)
  const persistedCallback = usePersistentCallback(callback)

  delay = Math.max(delay, 0)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    savedCallback.current = persistedCallback
  }, [persistedCallback])

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      savedCallback.current?.()
    }, delay)

    return clearTimer
  }, [delay, clearTimer])

  return clearTimer
}

export default useTimeout
