import { useCallback, useState } from 'react'

/**
 * Custom hook for managing a boolean state with convenient update functions.
 * @param {boolean} [defaultValue=false] - The initial value for the boolean state.
 * @returns {{
 *   booleanValue: boolean,
 *   setBooleanValue: React.Dispatch<React.SetStateAction<boolean>>,
 *   setTrue: () => void,
 *   setFalse: () => void,
 *   setToggle: () => void
 * }}
 */
export function useBooleanState(defaultValue: boolean = false) {
  const [booleanValue, setBooleanValue] = useState(!!defaultValue)
  /**
   * Sets the boolean value to `true`.
   */
  const setTrue = useCallback(() => setBooleanValue(true), [])
  /**
   * Sets the boolean value to `false`.
   */
  const setFalse = useCallback(() => setBooleanValue(false), [])
  /**
   * Toggles the boolean value.
   */
  const setToggle = useCallback(() => setBooleanValue((value) => !value), [])

  return { booleanValue, setBooleanValue, setTrue, setFalse, setToggle }
}
