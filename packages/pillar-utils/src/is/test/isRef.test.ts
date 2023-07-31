import { describe, test, expect } from 'vitest'
import { isRef } from '../is'

describe('isRef', () => {
  test('should return true for Ref objects', () => {
    const ref = { current: null }
    expect(isRef(ref)).toBe(true)
  })

  test('should return false for non-Ref values', () => {
    expect(isRef(null)).toBe(false)
    expect(isRef(undefined)).toBe(false)
    expect(isRef({})).toBe(false)
    expect(isRef([])).toBe(false)
    expect(isRef('ref')).toBe(false)
    expect(isRef(42)).toBe(false)
    expect(isRef({ currents: null })).toBe(false)
  })
})
