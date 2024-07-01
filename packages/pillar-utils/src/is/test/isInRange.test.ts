import { describe, test, expect } from 'vitest'
import { isInRange } from '..' // Replace "your-file" with the actual file path

describe('isValidURL Test', () => {
  test('isInRange function', () => {
    // Test case where num is within the range
    let result = isInRange({ num: 5, min: 1, max: 10 })
    expect(result).toBe(true)

    // Test case where num is below the range
    result = isInRange({ num: 0, min: 1, max: 10 })
    expect(result).toBe(false)

    // Test case where num is above the range
    result = isInRange({ num: 11, min: 1, max: 10 })
    expect(result).toBe(false)

    // Test case where num is equal to the min of the range
    result = isInRange({ num: 1, min: 1, max: 10 })
    expect(result).toBe(true)

    // Test case where num is equal to the max of the range
    result = isInRange({ num: 10, min: 1, max: 10 })
    expect(result).toBe(true)
  })

  test('isInRange function', () => {
    // Previous test cases...

    // Test case where num, min, and max are negative numbers
    let result = isInRange({ num: -5, min: -10, max: -1 })
    expect(result).toBe(true)

    // Test case where num is zero and the range includes zero
    result = isInRange({ num: 0, min: -10, max: 10 })
    expect(result).toBe(true)

    // Test case where num is zero and the range does not include zero
    result = isInRange({ num: 0, min: 1, max: 10 })
    expect(result).toBe(false)

    // Test case where num is a floating point number within the range
    result = isInRange({ num: 5.5, min: 1, max: 10 })
    expect(result).toBe(true)

    // Test case where num is a floating point number outside the range
    result = isInRange({ num: 10.5, min: 1, max: 10 })
    expect(result).toBe(false)

    result = isInRange({ num: 5, min: 5, max: 5 })
    expect(result).toBe(true)

    result = isInRange({ num: NaN, min: 1, max: 10 })
    expect(result).toBe(false)
    result = isInRange({ num: 5, min: NaN, max: 10 })
    expect(result).toBe(false)
    result = isInRange({ num: 5, min: 1, max: NaN })
    expect(result).toBe(false)

    result = isInRange({ num: NaN, min: NaN, max: NaN })
    expect(result).toBe(false)
  })
})
