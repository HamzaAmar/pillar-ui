import { describe, test, expect } from 'vitest'
import { getDay } from '../date'

describe('getDay', () => {
  test('returns the day of the month', () => {
    const date = new Date('2022-07-01')
    const day = getDay(date)
    expect(day).toBe(1)
    const day2 = getDay('2022-07-01')
    expect(day2).toBe(1)
  })

  test('returns the day of the month for a different date', () => {
    const date = new Date('2022-12-15')
    const day = getDay(date)
    expect(day).toBe(15)
    const day2 = getDay('2022-12-15')
    expect(day2).toBe(15)
  })

  test('returns the day of the month for a leap year', () => {
    const date = new Date('2024-02-29')
    const day = getDay(date)
    expect(day).toBe(29)
    const day2 = getDay('2024-02-29')
    expect(day2).toBe(29)
  })
})
