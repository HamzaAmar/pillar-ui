import { describe, test, expect } from 'vitest'
import { isInteger } from '..'

describe('isInteger', () => {
  test('should return true for integer values', () => {
    expect(isInteger(0)).toBe(true)
    expect(isInteger(42)).toBe(true)
    expect(isInteger(-10)).toBe(true)
  })

  test('should return false for non-integer values', () => {
    expect(isInteger(3.14)).toBe(false)
    expect(isInteger('42')).toBe(false)
    expect(isInteger(null)).toBe(false)
    expect(isInteger(undefined)).toBe(false)
    expect(isInteger({})).toBe(false)
  })
})
