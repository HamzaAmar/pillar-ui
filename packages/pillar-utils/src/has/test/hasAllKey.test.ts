import { test, describe, expect } from 'vitest'
import { hasAllKeys } from '..'

describe('hasAllKeys Utility Test', () => {
  test('hasAllKeys detects if an object has all specific keys', () => {
    const obj = { a: 1, b: 2, c: 3 }

    // Test with keys that exist in the object
    expect(hasAllKeys(obj, ['a', 'b', 'c'])).toBe(true)

    // Test with some keys that do not exist in the object
    expect(hasAllKeys(obj, ['a', 'b', 'd'])).toBe(false)

    // Test with a key that does not exist in the object
    expect(hasAllKeys(obj, ['d'])).toBe(false)
  })

  test('hasAllKeys works with different types of keys', () => {
    const obj = { '1': 'a', 2: 'b', true: 'c', null: 'd', undefined: 'e' }

    // Test with keys of different types
    // @ts-ignore
    expect(hasAllKeys(obj, ['1', 2, true, null, undefined])).toBe(true)

    // Test with a key that does not exist in the object
    expect(hasAllKeys(obj, ['3'])).toBe(false)
  })

  test('hasAllKeys works with nested objects', () => {
    const obj = { a: { b: { c: 3 } } }

    // Test with keys of nested objects
    expect(hasAllKeys(obj, ['a'])).toBe(true)
    expect(hasAllKeys(obj.a, ['b'])).toBe(true)
    expect(hasAllKeys(obj.a.b, ['c'])).toBe(true)

    // Test with keys that do not exist in the nested objects
    expect(hasAllKeys(obj, ['b'])).toBe(false)
    expect(hasAllKeys(obj.a, ['c'])).toBe(false)
    expect(hasAllKeys(obj.a.b, ['d'])).toBe(false)
  })
})
