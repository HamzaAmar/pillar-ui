import { describe, it, expect } from 'vitest'
import { isPromise } from '../is'

describe('isPromise', () => {
  it('should return true for Promise objects', () => {
    expect(isPromise(new Promise(() => {}))).toBe(true)
    expect(isPromise(Promise.resolve())).toBe(true)
  })

  it('should return false for non-Promise values', () => {
    expect(isPromise(42)).toBe(false)
    expect(isPromise('promise')).toBe(false)
    expect(isPromise(null)).toBe(false)
    expect(isPromise(undefined)).toBe(false)
    expect(isPromise({})).toBe(false)
    expect(isPromise([])).toBe(false)
  })
})
