import { test, expect, describe } from 'vitest'
import { hasKey } from '..'

describe('Test hasKey utility', () => {
  test('hasKey detects if an object has a specific key', () => {
    const obj = { a: 1, b: 2, c: 3 }

    // Test with keys that exist in the object
    expect(hasKey(obj, 'a')).toBe(true)
    expect(hasKey(obj, 'b')).toBe(true)
    expect(hasKey(obj, 'c')).toBe(true)

    // Test with a key that does not exist in the object
    expect(hasKey(obj, 'd')).toBe(false)
  })

  test('hasKey works with different types of keys', () => {
    const obj = { '1': 'a', 2: 'b', true: 'c', null: 'd', undefined: 'e' }

    // Test with keys of different types
    expect(hasKey(obj, '1')).toBe(true)
    expect(hasKey(obj, 2)).toBe(true)

    // Test with a key that does not exist in the object
    expect(hasKey(obj, '3')).toBe(false)
  })

  test('hasKey works with nested objects', () => {
    const obj = { a: { b: { c: 3 } } }

    // Test with keys of nested objects
    expect(hasKey(obj, 'a')).toBe(true)
    expect(hasKey(obj.a, 'b')).toBe(true)
    expect(hasKey(obj.a.b, 'c')).toBe(true)

    // Test with keys that do not exist in the nested objects
    expect(hasKey(obj, 'b')).toBe(false)
    expect(hasKey(obj.a, 'c')).toBe(false)
    expect(hasKey(obj.a.b, 'd')).toBe(false)
  })
})
