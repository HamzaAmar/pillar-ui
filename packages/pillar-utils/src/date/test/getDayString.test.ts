import { describe, test, expect } from 'vitest'
import { getDayString } from '../date'

describe('getDayString', () => {
  test('returns the day of the week as a string', () => {
    const date = new Date('2022-07-01')
    const dayString = getDayString(date)
    expect(dayString).toBe('Friday')
  })

  test('returns the abbreviated day of the week as a string', () => {
    const date = new Date('2022-07-01')
    const dayString = getDayString(date, 'en-US', 'short')
    expect(dayString).toBe('Fri')
  })

  test('returns the wide day of the week as a string', () => {
    const date = new Date('2022-07-01')
    const dayString = getDayString(date, 'en-US', 'long')
    expect(dayString).toBe('Friday')
  })

  test('returns the narrow day of the week as a string', () => {
    const date = new Date('2022-07-01')
    const dayString = getDayString(date, 'en-US', 'narrow')
    expect(dayString).toBe('F')
  })

  test('returns the day of the week in a different locale', () => {
    const date = new Date('2022-07-01')
    const dayString = getDayString(date, 'fr-FR')
    expect(dayString).toBe('vendredi')
  })
})
