import { arraysEqual } from '..'
import { describe, test, expect } from 'vitest'

describe('arraysEqual function', () => {
  test('should return false for arrays with different order of elements', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [3, 1, 2]
    const result = arraysEqual(arr1, arr2)
    expect(result).toBe(false)
  })

  test('should return true for equal arrays', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    const result = arraysEqual(arr1, arr2)
    expect(result).toBe(true)
  })

  test('should return false for arrays with different lengths', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2]
    const result = arraysEqual(arr1, arr2)
    expect(result).toBe(false)
  })

  test('should return false for arrays with different elements', () => {
    const arr1 = ['apple', 'banana', 'cherry']
    const arr2 = ['apple', 'orange', 'cherry']
    const result = arraysEqual(arr1, arr2)
    expect(result).toBe(false)
  })

  test('should return true for empty arrays', () => {
    const arr1: number[] = []
    const arr2: number[] = []
    const result = arraysEqual(arr1, arr2)
    expect(result).toBe(true)
  })
})
