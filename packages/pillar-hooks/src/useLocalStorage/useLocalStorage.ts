import { useState, useEffect } from 'react'
import { isBrowser, isFunction } from '@pillar-ui/utils'
import { storageService } from './storageService'
import { UseLocalStorageParams } from './useLocalStorage.type'

// Define a custom hook that supports SSR and uses local storage
function useLocalStorage<T>({
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

  // Define a function to remove the value from local storage
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

export default useLocalStorage
