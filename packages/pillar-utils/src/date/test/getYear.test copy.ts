import { describe, test, expect } from 'vitest'
import { getYear } from '../date'

describe('getYear', () => {
  test('returns the day of the month', () => {
    const date = new Date('2022-07-01')
    const day = getYear(date)
    expect(day).toBe(2022)
    const day2 = getYear('2022-07-01')
    expect(day2).toBe(2022)
  })

  test('returns the day of the month for a different date', () => {
    const date = new Date('2020-12-15')
    const day = getYear(date)
    expect(day).toBe(2020)
    const day2 = getYear('2020-12-15')
    expect(day2).toBe(2020)
  })

  test('returns the day of the month for a leap year', () => {
    const date = new Date('1950-02-15')
    const day = getYear(date)
    expect(day).toBe(1950)
    const day2 = getYear('1950-02-15')
    expect(day2).toBe(1950)
  })
})
