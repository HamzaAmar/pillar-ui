import { getEndOfMonth } from '..' // Replace 'your-module' with the correct path to the module containing the functions.
import { describe, test, expect } from 'vitest'

describe('getEndOfMonth', () => {
  test('should return the end of the month for a valid date string (en-US)', () => {
    const dateStr = '2023-01-15'
    const result = getEndOfMonth(dateStr)
    expect(result).toEqual({
      day: 'Tuesday',
      month: 'January',
      year: 2023,
    })
  })

  test('should return the end of the month for a valid date object (fr-FR)', () => {
    const dateObj = new Date('2022-12-25')
    const result = getEndOfMonth(dateObj, 'fr-FR')
    expect(result).toEqual({
      day: 'samedi',
      month: 'décembre',
      year: 2022,
    })
  })

  test('should return the end of the month for a date in a leap year (en-US)', () => {
    const dateStr = '2024-02-10' // 2024 is a leap year
    const result = getEndOfMonth(dateStr)
    expect(result).toEqual({
      day: 'Thursday',
      month: 'February',
      year: 2024,
    })
  })

  test('should return the end of the month for a date in a non-leap year (en-US)', () => {
    const dateStr = '2023-02-10'
    const result = getEndOfMonth(dateStr)
    expect(result).toEqual({
      day: 'Tuesday',
      month: 'February',
      year: 2023,
    })
  })

  test('should convert invalid locale to "en-US" and return end of the month', () => {
    const dateStr = '2023-01-15'
    const result = getEndOfMonth(dateStr, 'invalid-locale')
    expect(result).toEqual({
      day: 'Tuesday',
      month: 'January',
      year: 2023,
    })
  })
})
