import { useCallback, useState } from 'react'

/**
 * A custom React hook to manage a boolean state and provide utility functions to update it.
 *
 * @param {boolean} defaultValue - The initial boolean value (default is `false`).
 *
 * @returns {{
 *   value: boolean,
 *   setBooleanValue: React.Dispatch<React.SetStateAction<boolean>>,
 *   setTrue: () => void,
 *   setFalse: () => void,
 *   toggle: () => void
 * }}
 *   An object containing the boolean state and utility functions.
 *   - **value**: The current boolean state.
 *   - **setBooleanValue**: A setter function to update the boolean state.
 *   - **setTrue**: A function to set the boolean state to `true`.
 *   - **setFalse**: A function to set the boolean state to `false`.
 *   - **toggle**: A function to toggle the boolean state (from `true` to `false` or vice versa).
 */

export const useBool = (defaultValue: boolean = false) => {
  const [value, setValue] = useState(defaultValue)

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue((v) => !v), [])

  return { value, setValue, setTrue, setFalse, toggle }
}
