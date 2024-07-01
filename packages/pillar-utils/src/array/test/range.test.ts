import { range } from '..'
import { describe, test, expect } from 'vitest'

describe('range function', () => {
  test('should generate an array of numbers within the specified range', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
    expect(range(-3, 3)).toEqual([-3, -2, -1, 0, 1, 2, 3])
    expect(range(10, 10)).toEqual([10])
    expect(range(5, 1)).toEqual([5, 4, 3, 2, 1])
    expect(range(1.3, 6)).toEqual([1, 2, 3, 4, 5, 6])
    expect(range(1.6, 6)).toEqual([2, 3, 4, 5, 6])
  })

  test('should generate an empty array failed use case', () => {
    expect(range(NaN, 0)).toEqual([])
    expect(range(0, NaN)).toEqual([])
    expect(range(NaN, NaN)).toEqual([])
  })
})
