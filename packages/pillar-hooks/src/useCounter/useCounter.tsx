import { useState } from 'react'
import { clamp } from '@pillar-ui/utils'
import type { UseCounterProps } from './useCounter.type'

/**
 * A custom React hook to manage a counter with increment, decrement, and reset functions.
 *
 * @param {UseCounterProps} options - The options object containing configuration for the counter.
 *
 * @returns {{
 *   count: number,
 *   increment: (amount?: number) => void,
 *   decrement: (amount?: number) => void,
 *   reset: () => void,
 *   setCount: React.Dispatch<React.SetStateAction<number>>
 * }}
 *   An object containing the counter state and utility functions.
 *   - **count**: The current value of the counter.
 *   - **increment**: A function to increment the counter by a specified amount (default is 1).
 *   - **decrement**: A function to decrement the counter by a specified amount (default is 1).
 *   - **reset**: A function to reset the counter to its initial value or the minimum value.
 *   - **setCount**: A setter function to update the counter value.
 *
 * @example
 * // Example usage in a functional component:
 * function CounterComponent() {
 *   const { count, increment, decrement, reset } = useCounter({ value: 0, min: 0, max: 10, step: 1 });
 *
 *   return (
 *     <div>
 *       <p>Count: {count}</p>
 *       <button onClick={() => increment(1)}>Increment</button>
 *       <button onClick={() => decrement(1)}>Decrement</button>
 *       <button onClick={reset}>Reset</button>
 *     </div>
 *   );
 * }
 */
export function useCounter({ value = 0, min = -Infinity, max = Infinity, step = 1 }: UseCounterProps) {
  const [minValue, maxValue] = [Math.min(min, max), Math.max(min, max)]

  const initialValue = clamp(value, [minValue, maxValue])

  const [count, setCount] = useState(initialValue)

  /**
   * increment function that increments a count amount a specified amount, until it reaches a maximum value.
   * @param {number } [amount = 1] - The amount to increment the counter amount (default: 1).
   */
  const increment = (amount: number = step) => {
    /*
      I use this to prevent 0 because 0 is a falsy value is better than
      initial value from function because those prevent 0
    */
    const newAmount = amount || 1
    if (!Number.isInteger(amount)) return
    setCount((x) => clamp(x + newAmount, [minValue, maxValue]))
  }
  /**
   * Decrement the counter value amount a specified amount.
   * @param {number} [amount = 1] - The amount to decrement the counter amount (default: 1).
   */
  const decrement = (amount: number = step) => {
    /*
      I use this to prevent 0 because 0 is a falsy value is better than
      initial value from function because those prevent 0
    */
    const newAmount = amount || 1
    if (!Number.isInteger(amount)) return
    setCount((x) => clamp(x - newAmount, [minValue, maxValue]))
  }

  /**
   * Reset the counter value to its initial value or the minimum value.
   */
  const reset = () => setCount(initialValue)

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  }
}
