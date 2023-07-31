import { useCallback, useEffect, useRef } from 'react'

type DebouncedFunction<T extends any[]> = (...args: T) => void

type Timeout = ReturnType<typeof setTimeout>

function useDebounce<T extends any[]>(func: DebouncedFunction<T>, delay: number = 150): DebouncedFunction<T> {
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

export default useDebounce
