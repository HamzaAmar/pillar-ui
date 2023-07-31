import { isArray } from '../is'
import { describe, test, expect } from 'vitest'

describe('isArray', () => {
  test('should return true for array values', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray(new Array())).toBe(true)
  })

  test('should return false for non-array values', () => {
    expect(isArray('string')).toBe(false)
    expect(isArray(42)).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray({})).toBe(false)
  })
})
