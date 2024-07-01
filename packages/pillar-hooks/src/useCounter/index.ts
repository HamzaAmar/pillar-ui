import { useState } from 'react'
import { clamp } from '@pillar-ui/utils'

/**
 * A custom React hook to manage a counter with increment, decrement, and reset functions.
 *
 * @param {UseCounterProps} options - The options object containing configuration for the counter.
 * @param {number} options.value - The initial value of the counter.
 * @param {number} [options.min=-Infinity] - The minimum value allowed for the counter.
 * @param {number} [options.max=Infinity] - The maximum value allowed for the counter.
 * @param {number} [options.step=1] - The amount by which the counter should be incremented or decremented.
 * @param {boolean} [options.goToMaxOnExceed=false] - If true, the counter will go to the maximum value when it exceeds it.
 * @see **Pillar:site** {@link https://www.pillar-ui.com/docs/hooks/useCounter}
 * @see **Github:site** {@link https://github.com/HamzaAmar/pillar-ui/blob/main/packages/pillar-hooks/src/useCounter/useCounter.tsx}
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
export function useCounter(options?: UseCounterProps) {
  const { value = 0, min = -Infinity, max = Infinity, step = 1, goToMaxOnExceed = false } = options ?? {}
  const [minValue, maxValue] = [Math.min(min, max), Math.max(min, max)]

  const initialValue = clamp(value, [minValue, maxValue])

  const [count, setCount] = useState(initialValue)

  /**
   * Increment the counter value by a specified amount.
   * @param {number} [amount = 1] - The amount to increment the counter (default: 1).
   */
  const increment = (amount: number = step) => {
    setCount((x) => {
      const count = x + amount
      if (!goToMaxOnExceed && count > maxValue) return x
      return clamp(count, [minValue, maxValue])
    })
  }

  /**
   * Decrement the counter value by a specified amount.
   * @param {number} [amount = 1] - The amount to decrement the counter (default: 1).
   */
  const decrement = (amount: number = step) => {
    setCount((x) => {
      const count = x - amount
      if (!goToMaxOnExceed && count < min) return x
      return clamp(count, [minValue, maxValue])
    })
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

export interface UseCounterProps {
  value?: number
  max?: number
  min?: number
  step?: number
  goToMaxOnExceed?: boolean
}
