import { describe, test, expect } from 'vitest'
import { getMonth } from '../date'

describe('getMonth', () => {
  test('returns the month of the year', () => {
    const date = new Date('2022-07-01')
    const day = getMonth(date)
    expect(day).toBe(7)
    const day2 = getMonth('2022-1-1')
    expect(day2).toBe(1)
  })

  test('returns the month of the year for a different date', () => {
    const date = new Date('2022-12-15')
    const day = getMonth(date)
    expect(day).toBe(12)
    const day2 = getMonth('2022-08-15')
    expect(day2).toBe(8)
  })

  test('returns the month of the year for a leap year', () => {
    const date = new Date('2024-02-29')
    const day = getMonth(date)
    expect(day).toBe(2)
    const day2 = getMonth('2024-06-29')
    expect(day2).toBe(6)
  })
})
