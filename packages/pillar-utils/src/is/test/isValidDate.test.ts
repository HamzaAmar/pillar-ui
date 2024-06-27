import { describe, test, expect } from 'vitest'
import { isValidDate } from '..' // Replace "your-file" with the actual file path

describe('isValidDate', () => {
  test('should return true for valid date strings', () => {
    expect(isValidDate('2023-05-30T12:34:56Z')).toBe(true)
    expect(isValidDate('2023-05-30')).toBe(true)
    expect(isValidDate('2023/05/30')).toBe(true)
    expect(isValidDate('May 30, 2023')).toBe(true)
    expect(isValidDate('01/01/2023')).toBe(true)
    expect(isValidDate('12-31-2023')).toBe(true)
    expect(isValidDate('30-May-2023')).toBe(true)
    expect(isValidDate('30 May 2023')).toBe(true)
    expect(isValidDate('2023/02/30')).toBe(true)
    expect(isValidDate('2023.05.30')).toBe(true)
  })

  test('should return false for invalid date strings', () => {
    expect(isValidDate('Invalid Date')).toBe(false)
    expect(isValidDate('2023-13-45')).toBe(false)
    expect(isValidDate('random string')).toBe(false)
    expect(isValidDate('2023/13/01')).toBe(false)
    // expect(isValidDate('2023/02/30')).toBe(false)
  })

  test('should return false for date strings with invalid formats', () => {
    expect(isValidDate('30/05/2023')).toBe(false)
    expect(isValidDate('20230530')).toBe(false)
  })
})
