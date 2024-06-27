import { getStartOfYear } from '..' // Replace 'your-module' with the correct path to the module containing the function.
import { describe, test, expect } from 'vitest'

describe('getStartOfYear', () => {
  test('should return the start of the year for a valid date string (en-US)', () => {
    const dateStr = '2023-01-15'
    const result = getStartOfYear(dateStr)
    expect(result).toEqual({
      day: 'Sunday',
      month: 'January',
      year: 2023,
    })
  })

  test('should return the start of the year for a valid date object (fr-FR)', () => {
    const dateObj = new Date('2022-12-25')
    const result = getStartOfYear(dateObj, 'fr-FR')
    expect(result).toStrictEqual({
      day: 'samedi',
      month: 'janvier',
      year: 2022,
    })
  })

  test('should convert invalid locale to "en-US" and return start of the year', () => {
    const dateStr = '2022-06-20'
    const result = getStartOfYear(dateStr, 'invalid-locale')
    expect(result).toStrictEqual({
      day: 'Saturday',
      month: 'January',
      year: 2022,
    })
  })
})
