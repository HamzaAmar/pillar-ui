import { useState, useEffect } from 'react'
import { isBrowser, isFunction } from '@pillar-ui/utils'
import { storageService } from './storageService'

/**
 * Custom hook for managing state in local storage with support for server-side rendering (SSR).
 *
 * @template T - The type of the stored value.
 *
 * @param {object} options - Options for the useLocalStorage hook.
 * @param {string} options.key - The key under which the value will be stored in local storage.
 * @param {T} options.initialValue - The initial value to use if no value is found in local storage.
 * @param {Function} [options.serialize=JSON.stringify] - A function to serialize the value for storage.
 * @param {Function} [options.deserialize=JSON.parse] - A function to deserialize the stored value.
 * @returns {{
 *   value: T,
 *   setValue: (value: T | ((prevValue: T) => T)) => void,
 *   removeValue: () => void
 * }} - An object containing the current stored value, a function to set the value, and a function to remove the value.
 *
 * @example
 * // Example usage in a functional component:
 * import { useState } from 'react';
 * import { useLocalStorage } from '@pillar-ui/hooks'; // Adjust the path accordingly
 *
 * function LocalStorageComponent() {
 *   const { value, setValue, removeValue } = useLocalStorage({
 *     key: 'myKey',
 *     initialValue: '',
 *   });
 *
 *   return (
 *     <div>
 *       <p>Stored Value: {value}</p>
 *       <input
 *         type="text"
 *         value={value}
 *         onChange={(e) => setValue(e.target.value)}
 *       />
 *       <button onClick={removeValue}>Remove Value</button>
 *     </div>
 *   );
 * }
 */
export function useLocalStorage<T>({
  key,
  initialValue,
  serialize = JSON.stringify,
  deserialize = JSON.parse,
}: UseLocalStorageParams<T>) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (!isBrowser) return initialValue

    return (storageService.getItem(key) ?? initialValue) as T
  })

  const setValue = (value: T) => {
    const valueToStore = isFunction(value) ? value(storedValue) : value
    const isSet = storageService.setItem(key, serialize(valueToStore))
    if (isSet) setStoredValue(valueToStore)
  }

  /**
   * Remove the value from local storage.
   *
   * @returns {void}
   */
  const removeValue = () => {
    const isSet = storageService.removeItem(key)
    if (isSet) setStoredValue(initialValue)
  }

  // Listen to changes to key and update the state accordingly
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        try {
          setStoredValue(e.newValue ? deserialize(e.newValue) : initialValue)
        } catch (error) {
          console.error(`Error updating local storage for key "${key}": ${error}`)
        }
      }
    }

    // Attach the event listener for changes to local storage
    window.addEventListener('storage', handleStorageChange)

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [key, initialValue, deserialize])

  return { value: storedValue, setValue, removeValue }
}

export interface UseLocalStorageParams<T> {
  key: string
  initialValue: T
  serialize?: (value: T) => string
  deserialize?: (value: string) => T
}
