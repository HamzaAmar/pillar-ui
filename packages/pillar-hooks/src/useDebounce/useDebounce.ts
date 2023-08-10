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
 *
 * @example
 * // Example usage in a functional component:
 * import { useState } from 'react';
 * import { useDebounce } from './path-to-hooks/useDebounce'; // Adjust the path accordingly
 *
 * function DebounceComponent() {
 *   const [searchTerm, setSearchTerm] = useState('');
 *
 *   // Debounce the search function with a 300ms delay
 *   const debouncedSearch = useDebounce((value) => {
 *     // Perform search with the provided value
 *     console.log('Searching for:', value);
 *   }, 300);
 *
 *   const handleInputChange = (event) => {
 *     const newValue = event.target.value;
 *     setSearchTerm(newValue);
 *
 *     // Trigger the debounced search with the new value
 *     debouncedSearch(newValue);
 *   };
 *
 *   return (
 *     <div>
 *       <input
 *         type="text"
 *         placeholder="Search"
 *         value={searchTerm}
 *         onChange={handleInputChange}
 *       />
 *     </div>
 *   );
 * }
 */
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
