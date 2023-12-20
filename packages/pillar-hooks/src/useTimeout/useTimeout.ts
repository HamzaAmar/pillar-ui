import { useEffect, useRef, useCallback } from 'react'
import { usePersistentCallback } from '../usePersistentCallback'

import type { TimeoutType } from './useTimeout.type'

type TimeoutHandler = () => void

const validateParameters = (callback: TimeoutHandler | undefined, delay: number) => {
  if (typeof callback !== 'function') {
    throw new Error(`useTimeout: expects its parameter to be a function, but it received a [ ${typeof callback}`)
  }
  if (delay < 0) {
    throw new Error('useTimeout: The delay should not be smaller than 0.')
  }

  if (isNaN(delay)) {
    throw new Error('useTimeout: delay parameter cannot be NaN.')
  }
}

export const useTimeout = (callback: TimeoutHandler, delay: number = 150) => {
  const savedCallback = useRef<TimeoutHandler>()
  const timerRef = useRef<TimeoutType>(null)
  const persistedCallback = usePersistentCallback(callback)

  validateParameters(persistedCallback, delay)

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
