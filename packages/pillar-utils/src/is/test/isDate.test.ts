import { isDate } from '../is'
import { describe, it, expect } from 'vitest'

describe('isDate', () => {
  it('should return true for Date objects', () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate(new Date('2023-01-01'))).toBe(true)
  })

  it('should return false for non-Date values', () => {
    expect(isDate(42)).toBe(false)
    expect(isDate('2023-01-01')).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate([])).toBe(false)
  })
})
