import { useState } from 'react'
import { clamp } from '@pillar/utils'
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

export function useCounter({ value = 0, min = -Infinity, max = Infinity, step = 1 }: UseCounterProps) {
  min = Math.min(min, max)
  max = Math.max(min, max)

  const initialValue = clamp(value, [min, max])

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
    setCount((x) => clamp(x + newAmount, [min, max]))
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
    setCount((x) => clamp(x - newAmount, [min, max]))
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
