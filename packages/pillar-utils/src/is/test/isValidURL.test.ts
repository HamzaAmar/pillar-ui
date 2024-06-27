import { describe, test, expect } from 'vitest'
import { isValidURL } from '..' // Replace "your-file" with the actual file path

describe('isValidURL Test', () => {
  test('should return true for valid URLs', () => {
    expect(isValidURL('https://example.com')).toBe(true)
    expect(isValidURL('http://example.com')).toBe(true)
    expect(isValidURL('http://127.0.0.1')).toBe(true)
    expect(isValidURL('https://www.example.com/path?query=param#fragment')).toBe(true)
  })

  // Test with invalid URLs
  test('should return false for invalid URLs', () => {
    expect(isValidURL('')).toBe(false)
    expect(isValidURL('example')).toBe(false)
    expect(isValidURL('http:/example.com')).toBe(false)
    expect(isValidURL('http://')).toBe(false)
    expect(isValidURL('https://')).toBe(false)
    expect(isValidURL('http://localhost')).toBe(false)
  })

  // Test with non-string inputs
  test('should return false for non-string inputs', () => {
    // @ts-ignore// @ts-ignore
    expect(isValidURL(undefined)).toBe(false)
    // @ts-ignore
    expect(isValidURL(null)).toBe(false)
    // @ts-ignore
    expect(isValidURL(123)).toBe(false)
    // @ts-ignore
    expect(isValidURL({})).toBe(false)
    // @ts-ignore
    expect(isValidURL([])).toBe(false)
  })
})
