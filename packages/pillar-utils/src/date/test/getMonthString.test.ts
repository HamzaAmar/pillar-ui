import { describe, test, expect } from 'vitest'
import { getMonthString } from '../date'

describe('getMonthString', () => {
  test('returns the month of the year as a string', () => {
    const date = new Date('2022-07-01')
    const monthString = getMonthString(date)
    expect(monthString).toBe('July')
  })

  test('returns the abbreviated month of the year as a string', () => {
    const date = new Date('2022-07-01')
    const monthString = getMonthString(date, 'en-US', 'short')
    expect(monthString).toBe('Jul')
  })

  test('returns the wide month of the year as a string', () => {
    const date = new Date('2022-07-01')
    const monthString = getMonthString(date, 'en-US', 'long')
    expect(monthString).toBe('July')
  })

  test('returns the narrow month of the year as a string', () => {
    const date = new Date('2022-07-01')
    const monthString = getMonthString(date, 'en-US', 'narrow')
    expect(monthString).toBe('J')
  })

  test('returns the month of the year in a different locale', () => {
    const date = new Date('2022-07-01')
    const monthString = getMonthString(date, 'fr-FR')
    expect(monthString).toBe('juillet')
  })
})
