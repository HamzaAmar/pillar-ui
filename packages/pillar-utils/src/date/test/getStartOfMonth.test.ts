import { describe, test, expect } from 'vitest'
import { getStartOfMonth } from '..' // Replace 'your-module' with the correct path to the module containing the functions.

describe('getStartOfMonth', () => {
  test('should return the start of the month for a valid date string (en-US)', () => {
    const dateStr = '2023-01-15'
    const result = getStartOfMonth(dateStr)
    expect(result).toEqual({
      day: 'Sunday',
      month: 'January',
      year: 2023,
    })
  })

  test('should return the start of the month for a valid date object (fr-FR)', () => {
    const dateObj = new Date('2022-12-25')
    const result = getStartOfMonth(dateObj, 'fr-FR')
    expect(result).toEqual({
      day: 'jeudi',
      month: 'décembre',
      year: 2022,
    })
  })

  test('should convert invalid locale to "en-US" and return start of the month', () => {
    const dateStr = '2023-01-15'
    const result = getStartOfMonth(dateStr, 'invalid-locale')
    expect(result).toEqual({
      day: 'Sunday',
      month: 'January',
      year: 2023,
    })
  })
})
