import { useRef, useEffect, useMemo } from 'react'

/**
 * Custom hook to create a persistent callback that maintains its reference between renders.
 *
 * @template T - The type of the callback function.
 *
 * @param {T | undefined} callback - The callback function to be persisted.
 * @returns {T | undefined} - The persisted callback function.
 */
export function usePersistentCallback<T extends (...args: any[]) => any>(callback: T): T {
  const persistedCallback = useRef(callback)
  useEffect(() => {
    persistedCallback.current = callback
  })
  return useMemo(() => ((...args) => persistedCallback.current?.(...args)) as T, [])
}
