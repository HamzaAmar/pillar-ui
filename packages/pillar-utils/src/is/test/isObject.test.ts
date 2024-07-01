import { describe, test, expect } from 'vitest'
import { isObject } from '..'

describe('isObject', () => {
  test('should return true for object values', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ key: 'value' })).toBe(true)
  })

  test('should return false for non-object values', () => {
    expect(isObject('string')).toBe(false)
    expect(isObject(42)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
  })
})
