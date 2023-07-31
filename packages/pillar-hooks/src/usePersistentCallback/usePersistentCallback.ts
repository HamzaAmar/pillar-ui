import { useRef, useEffect, useMemo } from 'react'

export function usePersistentCallback<T extends (...args: any[]) => any>(callback: T | undefined): T | undefined {
  const persistedCallback = useRef(callback)
  useEffect(() => {
    persistedCallback.current = callback
  })

  const persistedFunction = useMemo(() => ((...args) => persistedCallback.current?.(...args)) as T, [])
  if (!callback) return
  if (typeof callback !== 'function') {
    return
  }

  return persistedFunction
}
