import { describe, test, expect } from 'vitest'
import { isFunction } from '..'

describe('isFunction', () => {
  test('should return true for function values', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(function () {})).toBe(true)
    expect(isFunction(class {})).toBe(true)
    expect(isFunction(async () => {})).toBe(true) // Async function
  })

  test('should return false for non-function values', () => {
    expect(isFunction(0)).toBe(false)
    expect(isFunction('function')).toBe(false)
  })
})
