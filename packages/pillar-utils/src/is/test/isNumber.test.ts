import { describe, it, expect } from 'vitest'
import { isNumber } from '../is'

describe('isNumber', () => {
  it('should return true for number values', () => {
    expect(isNumber(0)).toBe(true)
    expect(isNumber(42)).toBe(true)
    expect(isNumber(3.14)).toBe(true)
    expect(isNumber(Number.NaN)).toBe(true)
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(+'23')).toBe(true)
  })

  it('should return false for non-number values', () => {
    expect(isNumber('42')).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber({})).toBe(false)
  })
})
