import { useCallback, useState } from 'react'

/**
 * Custom hook for managing a boolean state with convenient update functions.
 * @param defaultValue - The initial value for the boolean state.
 * @returns an object containing the boolean value and update functions.
 */

export const useBooleanState = (defaultValue: boolean = false) => {
  const [booleanValue, setBooleanValue] = useState(defaultValue)

  const setTrue = useCallback(() => setBooleanValue(true), [])
  const setFalse = useCallback(() => setBooleanValue(false), [])
  const setToggle = useCallback(() => setBooleanValue((value) => !value), [])

  return { booleanValue, setBooleanValue, setTrue, setFalse, setToggle }
}
