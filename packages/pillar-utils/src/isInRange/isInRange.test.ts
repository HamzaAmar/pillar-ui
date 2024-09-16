import { describe, test, expect } from 'vitest'
import { isInRange } from '..' // Replace "your-file" with the actual file path

describe('isValidURL Test', () => {
  test('isInRange function', () => {
    // Test case where value is within the range
    let result = isInRange({ value: 5, min: 1, max: 10 })
    expect(result).toBe(true)

    // Test case where value is below the range
    result = isInRange({ value: 0, min: 1, max: 10 })
    expect(result).toBe(false)

    // Test case where value is above the range
    result = isInRange({ value: 11, min: 1, max: 10 })
    expect(result).toBe(false)

    // Test case where value is equal to the min of the range
    result = isInRange({ value: 1, min: 1, max: 10 })
    expect(result).toBe(true)

    // Test case where value is equal to the max of the range
    result = isInRange({ value: 10, min: 1, max: 10 })
    expect(result).toBe(true)
  })

  test('isInRange function', () => {
    // Previous test cases...

    // Test case where value, min, and max are negative valuebers
    let result = isInRange({ value: -5, min: -10, max: -1 })
    expect(result).toBe(true)

    // Test case where value is zero and the range includes zero
    result = isInRange({ value: 0, min: -10, max: 10 })
    expect(result).toBe(true)

    // Test case where value is zero and the range does not include zero
    result = isInRange({ value: 0, min: 1, max: 10 })
    expect(result).toBe(false)

    // Test case where value is a floating point valueber within the range
    result = isInRange({ value: 5.5, min: 1, max: 10 })
    expect(result).toBe(true)

    // Test case where value is a floating point valueber outside the range
    result = isInRange({ value: 10.5, min: 1, max: 10 })
    expect(result).toBe(false)

    result = isInRange({ value: 5, min: 5, max: 5 })
    expect(result).toBe(true)

    result = isInRange({ value: NaN, min: 1, max: 10 })
    expect(result).toBe(false)
    result = isInRange({ value: 5, min: NaN, max: 10 })
    expect(result).toBe(false)
    result = isInRange({ value: 5, min: 1, max: NaN })
    expect(result).toBe(false)

    result = isInRange({ value: NaN, min: NaN, max: NaN })
    expect(result).toBe(false)
  })
})
