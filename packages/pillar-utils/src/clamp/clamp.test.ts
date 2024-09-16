import { clamp } from '.'
import { describe, test, expect } from 'vitest'

describe('clamp', () => {
  test('clamps a value within the specified range', () => {
    const result = clamp(5, [10, 20])
    expect(result).toBe(10)
  })

  test('returns the minimum value when the value is less than the minimum', () => {
    const result = clamp(5, [10, 20])
    expect(result).toBe(10)
  })

  test('returns the maximum value when the value is greater than the maximum', () => {
    const result = clamp(25, [10, 20])
    expect(result).toBe(20)
  })

  test('returns the value itself when the value is within the specified range', () => {
    const result = clamp(15, [10, 20])
    expect(result).toBe(15)
  })

  test('handles negative values correctly', () => {
    const result = clamp(-5, [-10, 10])
    expect(result).toBe(-5)
  })

  test('handles floating-point values correctly', () => {
    const result = clamp(3.14, [0, 2.71])
    expect(result).toBe(2.71)
  })
})
