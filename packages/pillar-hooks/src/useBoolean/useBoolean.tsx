import { useCallback, useState } from 'react'

/**
 * A custom React hook to manage a boolean state and provide utility functions to update it.
 *
 * @param {boolean} defaultValue - The initial boolean value (default is `false`).
 *
 * @returns {{
 *   booleanValue: boolean,
 *   setBooleanValue: React.Dispatch<React.SetStateAction<boolean>>,
 *   setTrue: () => void,
 *   setFalse: () => void,
 *   setToggle: () => void
 * }}
 *   An object containing the boolean state and utility functions.
 *   - **booleanValue**: The current boolean state.
 *   - **setBooleanValue**: A setter function to update the boolean state.
 *   - **setTrue**: A function to set the boolean state to `true`.
 *   - **setFalse**: A function to set the boolean state to `false`.
 *   - **setToggle**: A function to toggle the boolean state (from `true` to `false` or vice versa).
 *
 * @example
 * // Example usage in a functional component:
 * function BooleanComponent() {
 *   const { booleanValue, setTrue, setFalse, setToggle } = useBooleanState(true);
 *
 *   return (
 *     <div>
 *       <p>Boolean Value: {booleanValue ? 'True' : 'False'}</p>
 *       <button onClick={setTrue}>Set True</button>
 *       <button onClick={setFalse}>Set False</button>
 *       <button onClick={setToggle}>Toggle</button>
 *     </div>
 *   );
 * }
 */

export const useBooleanState = (defaultValue: boolean = false) => {
  const [booleanValue, setBooleanValue] = useState(defaultValue)

  const setTrue = useCallback(() => setBooleanValue(true), [])
  const setFalse = useCallback(() => setBooleanValue(false), [])
  const setToggle = useCallback(() => setBooleanValue((value) => !value), [])

  return { booleanValue, setBooleanValue, setTrue, setFalse, setToggle }
}
