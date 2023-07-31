import { describe, test, expect } from 'vitest'
import { isValidIPAddress } from '../is' // Replace "your-file" with the actual file path

describe('isValidURL Test', () => {
  test('should return true for valid IP addresses', () => {
    expect(isValidIPAddress('192.168.1.1')).toBe(true)
    expect(isValidIPAddress('127.0.0.1')).toBe(true)
    expect(isValidIPAddress('255.255.255.255')).toBe(true)
  })

  // Test with invalid IP addresses
  test('should return false for invalid IP addresses', () => {
    expect(isValidIPAddress('')).toBe(false)
    expect(isValidIPAddress('192.168.1')).toBe(false)
    expect(isValidIPAddress('256.256.256.256')).toBe(false)
    expect(isValidIPAddress('192.168.1.1.1')).toBe(false)
    expect(isValidIPAddress('abc.def.ghi.jkl')).toBe(false)
  })

  // Test with non-string inputs
  test('should return false for non-string inputs', () => {
    // @ts-ignore
    expect(isValidIPAddress(undefined)).toBe(false)
    // @ts-ignore
    expect(isValidIPAddress(null)).toBe(false)
    // @ts-ignore
    expect(isValidIPAddress(123)).toBe(false)
    // @ts-ignore
    expect(isValidIPAddress({})).toBe(false)
    // @ts-ignore
    expect(isValidIPAddress([])).toBe(false)
  })
})
