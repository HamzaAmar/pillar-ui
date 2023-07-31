import { describe, test, expect } from 'vitest'
import { isValidAlphanumeric } from '../is' // Replace "your-file" with the actual file path

describe('isValidAlphanumeric Test', () => {
  test('isValidAlphanumeric function - case: valid alphanumeric string', () => {
    let result = isValidAlphanumeric('abc123XYZ')
    expect(result).toBe(true) // 'abc123XYZ' is alphanumeric
  })

  test('isValidAlphanumeric function - case: invalid alphanumeric string with space', () => {
    let result = isValidAlphanumeric('abc 123')
    expect(result).toBe(false) // 'abc 123' is not alphanumeric because of the space
  })

  test('isValidAlphanumeric function - case: empty string', () => {
    let result = isValidAlphanumeric('')
    expect(result).toBe(false) // An empty string is not alphanumeric
  })

  test('isValidAlphanumeric function - case: special characters in string', () => {
    let result = isValidAlphanumeric('abc@123')
    expect(result).toBe(false) // 'abc@123' is not alphanumeric because of the @
  })

  test('isValidAlphanumeric function - case: string of spaces', () => {
    let result = isValidAlphanumeric('     ')
    expect(result).toBe(false)
  })

  test('isValidAlphanumeric function - case: string of special characters', () => {
    let result = isValidAlphanumeric('!@#$%^&*()')
    expect(result).toBe(false)
  })
})
