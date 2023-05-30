import { useState } from 'react'
import type { UseCounterProps } from './useCounter.type'

/**
 * Custom hook for managing a counter value with increment, decrement, and reset functionality.
 * @param {number} [value = 0] - The initial value of the counter (default: 0).
 * @param {number} [min= -Infinity] - The minimum value allowed for the counter (default: -Infinity).
 * @param {number} [max= Infinity] - The maximum value allowed for the counter (default: Infinity).
 * @returns {{
 *   count: number,
 *   increment: () => void,
 *   decrement: () => void,
 *   reset: () => void
 *   setCount: () => React.Dispatch<React.SetStateAction<number>>
 * }}
 */

export function useCounter({ value = 0, min = -Infinity, max = Infinity }: UseCounterProps) {
  const [count, setCount] = useState(value)

  /**
   * increment function that increments a count amount a specified amount, until it reaches a maximum value.
   * @param {number } [amount = 1] - The amount to increment the counter amount (default: 1).
   */
  const increment = (amount: number = 1) =>
    setCount((x) => {
      const newCount = x + amount
      return newCount >= max ? x : newCount
    })

  /**
   * Decrement the counter value amount a specified amount.
   * @param {number} [amount = 1] - The amount to decrement the counter amount (default: 1).
   */
  const decrement = (amount: number = 1) =>
    setCount((x) => {
      const newCount = x - amount
      return newCount <= min ? x : newCount
    })

  /**
   * Reset the counter value to its initial value or the minimum value.
   */
  const reset = () => setCount(min ?? 0)

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  }
}
