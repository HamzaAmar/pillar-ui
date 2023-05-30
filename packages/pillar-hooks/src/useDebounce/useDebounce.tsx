import { useState, useEffect } from 'react'

/**
 * Custom hook for debouncing a value.
 * @template T - Type of the value to debounce.
 * @param {T} value - The value to debounce.
 * @param {number} [delay=500] - The debounce delay in milliseconds (default: 500).
 * @returns {T | undefined} - The debounced value or `undefined` if no value has been set.
 */

export function useDebounce<T>(value: T, delay: number = 500): T | undefined {
  const [debouncedValue, setDebouncedValue] = useState<T | undefined>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
