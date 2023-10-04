import { describe, test, expect } from 'vitest'
import { getEndOfWeek } from '../date' // Replace 'your-module' with the correct path to the module containing the functions.

describe('getEndOfWeek', () => {
  test('should return the end of the week for a valid date string (en-US)', () => {
    const dateStr = '2023-07-28' // A Friday
    const result = getEndOfWeek(dateStr)
    expect(result).toEqual({
      day: 'Saturday',
      month: 'July',
      year: 2023,
    })
  })

  test('should return the end of the week for a valid date object (fr-FR)', () => {
    const dateObj = new Date('2022-12-25') // A Sunday
    const result = getEndOfWeek(dateObj, 'fr-FR')
    expect(result).toEqual({
      day: 'dimanche',
      month: 'décembre',
      year: 2022,
    })
  })

  test('should return the end of the week for the current date (en-US)', () => {
    const currentDate = new Date('2023-07-30') // A Sunday
    const result = getEndOfWeek(currentDate)
    const expectedDay = currentDate.toLocaleString('en-US', { weekday: 'long' })
    const expectedMonth = currentDate.toLocaleString('en-US', { month: 'long' })
    const expectedYear = currentDate.getFullYear()
    expect(result).toEqual({
      day: expectedDay,
      month: expectedMonth,
      year: expectedYear,
    })
  })

  test('should convert invalid locale to "en-US" and return end of the week', () => {
    const dateStr = '2022-06-20'
    const result = getEndOfWeek(dateStr, 'invalid-locale')
    expect(result).toEqual({
      day: 'Saturday',
      month: 'June',
      year: 2022,
    })
  })
})
