import { isFloat } from '../is'
import { describe, it, expect } from 'vitest'

describe('isFloat', () => {
  it('should return true for float values', () => {
    expect(isFloat(3.14)).toBe(true)
    expect(isFloat(-0.5)).toBe(true)
    expect(isFloat(1.23456789)).toBe(true)
  })

  it('should return false for non-float values', () => {
    expect(isFloat(42)).toBe(false)
    expect(isFloat(0)).toBe(false)
    expect(isFloat('3.14')).toBe(false)
    expect(isFloat(null)).toBe(false)
    expect(isFloat(undefined)).toBe(false)
    expect(isFloat({})).toBe(false)
    expect(isFloat(2.5e10)).toBe(false)
  })

  it('should return false for integer values', () => {
    expect(isFloat(10)).toBe(false)
    expect(isFloat(-5)).toBe(false)
  })

  it('should return false for NaN', () => {
    expect(isFloat(NaN)).toBe(false)
  })

  it('should return false for Infinity', () => {
    expect(isFloat(Infinity)).toBe(false)
    expect(isFloat(-Infinity)).toBe(false)
  })
})
