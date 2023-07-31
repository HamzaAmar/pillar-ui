import { describe, test, expect } from 'vitest'
import { isLeapYear } from '../is'

describe('isLeapYear', () => {
  test('should return true for leap years', () => {
    expect(isLeapYear(2000)).toBe(true) // Divisible by 400
    expect(isLeapYear(2004)).toBe(true) // Divisible by 4
    expect(isLeapYear(2008)).toBe(true) // Divisible by 4
    expect(isLeapYear(2012)).toBe(true) // Divisible by 4
    expect(isLeapYear(2016)).toBe(true) // Divisible by 4
  })

  test('should return false for non-leap years', () => {
    expect(isLeapYear(1900)).toBe(false) // Divisible by 100 but not 400
    expect(isLeapYear(2001)).toBe(false) // Not divisible by 4
    expect(isLeapYear(2002)).toBe(false) // Not divisible by 4
    expect(isLeapYear(2003)).toBe(false) // Not divisible by 4
    expect(isLeapYear(2100)).toBe(false) // Divisible by 100 but not 400
  })

  test('should return false for invalid inputs', () => {
    expect(isLeapYear(NaN)).toBe(false)
    expect(isLeapYear(0)).toBe(false)
  })

  test('should return false for negative years', () => {
    expect(isLeapYear(-2000)).toBe(false) // Negative leap year
    expect(isLeapYear(-2004)).toBe(false) // Negative leap year
    expect(isLeapYear(-2008)).toBe(false) // Negative leap year
    expect(isLeapYear(-2012)).toBe(false) // Negative leap year
    expect(isLeapYear(-2016)).toBe(false) // Negative leap year
  })

  test('should return false for fractional years', () => {
    expect(isLeapYear(2000.5)).toBe(false) // Fractional year
    expect(isLeapYear(2004.75)).toBe(false) // Fractional year
    expect(isLeapYear(2008.25)).toBe(false) // Fractional year
    expect(isLeapYear(2012.33)).toBe(false) // Fractional year
    expect(isLeapYear(2016.9)).toBe(false) // Fractional year
  })
})
