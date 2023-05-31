import { describe, it, expect } from 'vitest'
import { isFunction } from '../is'

describe('isFunction', () => {
  it('should return true for function values', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(function () {})).toBe(true)
    expect(isFunction(class {})).toBe(true)
    expect(isFunction(async () => {})).toBe(true) // Async function
  })

  it('should return false for non-function values', () => {
    expect(isFunction(0)).toBe(false)
    expect(isFunction('function')).toBe(false)
  })
})
