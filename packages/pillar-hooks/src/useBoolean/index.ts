import { useState } from 'react'

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
 *
 * @example
 * // Example usage in a functional component:
 * function BooleanComponent() {
 *   const { value, setTrue, setFalse, toggle } = useBool(true);
 *
 *   return (
 *     <div>
 *       <p>Boolean Value: {value ? 'True' : 'False'}</p>
 *       <button onClick={setTrue}>Set True</button>
 *       <button onClick={setFalse}>Set False</button>
 *       <button onClick={toggle}>Toggle</button>
 *     </div>
 *   );
 * }
 */

export const useBool = (defaultValue: boolean = false) => {
  const [value, setValue] = useState(defaultValue)

  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)
  const toggle = () => setValue((v) => !v)

  return { value, setValue, setTrue, setFalse, toggle }
}
