import { test, describe, expect } from 'vitest'
import { hasIntersection } from '..'

describe('hasIntersection Utility Test', () => {
  test('hasIntersection detects if two arrays have common elements', () => {
    // Test with two arrays that have common elements
    expect(hasIntersection([1, 2, 3, 4], [3, 4, 5, 6])).toBe(true)

    // Test with two arrays that do not have common elements
    expect(hasIntersection([1, 2, 3, 4], [5, 6, 7, 8])).toBe(false)
  })

  test('hasIntersection works with different types of values', () => {
    // Test with two arrays that have common elements of different types
    expect(
      hasIntersection(
        ['1', 2, true, 'true', null, undefined, 'undefined'],
        [1, '2', false, 'false', 'null', undefined, 'undefined']
      )
    ).toBe(true)

    // Test with two arrays that do not have common elements of different types
    expect(
      hasIntersection(
        ['1', 2, true, 'true', null, 'null', undefined, 'undefined'],
        [3, '4', false, 'false', NaN, 'NaN', Infinity, 'Infinity']
      )
    ).toBe(false)

    expect(hasIntersection([NaN], [NaN])).toBe(true)
  })
})
