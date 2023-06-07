import { removeFromArray } from '../array'
import { describe, test, expect } from 'vitest'

describe('removeFromArray function', () => {
  test('should remove element from the first position', () => {
    const arr = [1, 2, 3, 4, 5]
    const position = 'first'
    const result = removeFromArray(arr, position)
    expect(result).toStrictEqual([2, 3, 4, 5])
  })

  test('should remove element from the last position', () => {
    const arr = [1, 2, 3, 4, 5]
    const position = 'last'
    const result = removeFromArray(arr, position)
    expect(result).toStrictEqual([1, 2, 3, 4])
  })

  test('should remove element from a specific index', () => {
    const arr = [1, 2, 3, 4, 5]
    const position = 2
    const result = removeFromArray(arr, position)
    expect(result).toStrictEqual([1, 2, 4, 5])
  })

  test('should return the original array if position is out of bounds', () => {
    const arr = [1, 2, 3, 4, 5]
    const position = 10
    const result = removeFromArray(arr, position)
    expect(result).toStrictEqual([1, 2, 3, 4])
  })

  test('should return an empty array if the original array is empty', () => {
    const arr: number[] = []
    const position = 'first'
    const result = removeFromArray(arr, position)
    expect(result).toStrictEqual([])
  })
})
