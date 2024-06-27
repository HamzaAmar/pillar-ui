import { describe, it, expect } from 'vitest'
import { getDaysInYear } from '..'

describe('getDaysInYear', () => {
  it('should return 365 for non-leap years', () => {
    expect(getDaysInYear('2022')).toBe(365)
    expect(getDaysInYear(new Date('2022'))).toBe(365)
    expect(getDaysInYear('1900')).toBe(365)
    expect(getDaysInYear('2100')).toBe(365)
  })

  it('should return 366 for leap years', () => {
    expect(getDaysInYear('2000')).toBe(366)
    expect(getDaysInYear(new Date('2000'))).toBe(366)
    expect(getDaysInYear('2004')).toBe(366)
    expect(getDaysInYear('2020')).toBe(366)
  })

  it('should handle invalid inputs', () => {
    expect(getDaysInYear('NaN')).toBe(null)
    expect(getDaysInYear('undefined')).toBe(null)
    expect(getDaysInYear('null')).toBe(null)
    expect(getDaysInYear('invalid')).toBe(null)
    expect(getDaysInYear('')).toBe(null)
    expect(getDaysInYear('1000/25/35')).toBe(null)
  })

  it('should handle negative years', () => {
    expect(getDaysInYear('-2022')).toBe(365)
    expect(getDaysInYear('-2000')).toBe(366)
    expect(getDaysInYear('-1900')).toBe(365)
  })
})
