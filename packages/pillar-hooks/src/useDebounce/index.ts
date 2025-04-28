import { useCallback, useEffect, useRef } from 'react'

type DebouncedFunction<T extends any[]> = (...args: T) => void

type Timeout = ReturnType<typeof setTimeout>

/**
 * Custom hook for debouncing a function in React components.
 *
 * @template T - The array of arguments expected by the debounced function.
 *
 * @param {DebouncedFunction<T>} func - The function to be debounced.
 * @param {number} [delay=150] - The delay in milliseconds before invoking the debounced function.
 *
 * @returns {DebouncedFunction<T>} - The debounced function.
 */
export function useDebounce<T extends any[]>(func: DebouncedFunction<T>, delay: number = 150): DebouncedFunction<T> {
  const timer = useRef<Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  const debouncedFunction = useCallback(
    (...args: T) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        try {
          func(...args)
        } catch (error) {
          throw error
        }
      }, delay)
    },

    [delay, func]
  )

  return debouncedFunction
}
