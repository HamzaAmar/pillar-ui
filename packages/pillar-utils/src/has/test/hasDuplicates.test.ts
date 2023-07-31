import { test, describe, expect } from 'vitest'
import { hasDuplicates } from '..'

describe('hasDuplicates utility function', () => {
  test('hasDuplicates detects if an array has duplicate values', () => {
    expect(hasDuplicates([1, 2, 2, 3, 4])).toBe(true)
    expect(hasDuplicates([1, 2, 3, 4, 5])).toBe(false)
  })

  test('hasDuplicates works with different types of values', () => {
    expect(hasDuplicates(['1', 1, true, 'true', null, 'null', undefined, 'undefined'])).toBe(false)
    expect(hasDuplicates(['1', 2, true, 'true', null, 'null', undefined, 'undefined'])).toBe(false)
  })
})
