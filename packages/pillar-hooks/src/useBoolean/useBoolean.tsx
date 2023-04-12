import { useCallback, useState } from 'react'

/**
 * Custom hook for managing a boolean state value.
 *
 * @param {boolean} [defaultValue] - The initial value of the boolean state default to false.
 * @returns {Object} An object containing the current boolean value and functions for updating it.
 */
export function useBooleanState(defaultValue: boolean = false) {
  const [booleanValue, setBooleanValue] = useState(!!defaultValue)
  const setTrue = useCallback(() => setBooleanValue(true), [])
  const setFalse = useCallback(() => setBooleanValue(false), [])
  const setToggle = useCallback(() => setBooleanValue((value) => !value), [])

  return { booleanValue, setBooleanValue, setTrue, setFalse, setToggle }
}
