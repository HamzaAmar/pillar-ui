import { describe, it, expect } from 'vitest'
import { isString } from '../is'

describe('isString', () => {
  it('should return true for string values', () => {
    const arr = [1, 2, 4]
    expect(isString('')).toBe(true)
    expect(isString('hello')).toBe(true)
    expect(isString('123')).toBe(true)
    expect(isString(arr.toString())).toBe(true)
    expect(isString(arr.join(','))).toBe(true)
  })

  it('should return false for non-string values', () => {
    expect(isString(0)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(false)).toBe(false)
  })
})
