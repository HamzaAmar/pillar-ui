import { describe, it, expect } from 'vitest'
import { getDaysInMonth } from '..'

describe('getDaysInMonth', () => {
  it('should return the correct number of days for a given date', () => {
    expect(getDaysInMonth('2022-01-01')).toEqual(31) // January has 31 days
    expect(getDaysInMonth('2022-02-01')).toEqual(28) // February has 28 days (non-leap year)
    expect(getDaysInMonth('2022-03-01')).toEqual(31) // March has 31 days
    expect(getDaysInMonth('2022-04-01')).toEqual(30) // April has 30 days
    expect(getDaysInMonth('2022-05-01')).toEqual(31) // May has 31 days
    expect(getDaysInMonth('2022-06-01')).toEqual(30) // June has 30 days
    expect(getDaysInMonth('2022-07-01')).toEqual(31) // July has 31 days
    expect(getDaysInMonth('2022-08-01')).toEqual(31) // August has 31 days
    expect(getDaysInMonth('2022-09-01')).toEqual(30) // September has 30 days
    expect(getDaysInMonth('2022-10-01')).toEqual(31) // October has 31 days
    expect(getDaysInMonth('2022-11-01')).toEqual(30) // November has 30 days
    expect(getDaysInMonth('2022-12-01')).toEqual(31) // December has 31 days
  })

  it('should handle leap years correctly', () => {
    expect(getDaysInMonth('2020-02-01')).toEqual(29) // February has 29 days in a leap year
    expect(getDaysInMonth('2024-02-01')).toEqual(29) // February has 29 days in a leap year
    expect(getDaysInMonth('2028-02-01')).toEqual(29) // February has 29 days in a leap year
  })

  it('should handle invalid date strings', () => {
    expect(getDaysInMonth('invalid')).toEqual(NaN) // Invalid date string returns NaN
    expect(getDaysInMonth('2022-13-01')).toEqual(NaN) // Invalid month returns NaN
    // expect(getDaysInMonth('2022-02-30')).toEqual(NaN) // Invalid day returns NaN
  })
})
