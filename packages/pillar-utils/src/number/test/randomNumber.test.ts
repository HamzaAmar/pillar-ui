import { describe, test, expect } from 'vitest'
import { randomNumber } from '../number'

describe('randomNumber', () => {
  test('generates a random number within the specified range', () => {
    const result = randomNumber({ min: 10, max: 20 })
    expect(result).toBeGreaterThanOrEqual(10)
    expect(result).toBeLessThan(20)
    expect(result % 1).not.toBe(0)
  })

  test('generates a random number rounded to the nearest integer', () => {
    const result = randomNumber({ min: 10, max: 20, rounded: true })
    expect(result).toBeGreaterThanOrEqual(10)
    expect(result).toBeLessThan(20)
    expect(result % 1).toBe(0)
  })

  test('generates a random number within the default range', () => {
    const result = randomNumber({ max: 100 })
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThan(100)
  })

  test('generates a random number between 0 and 1', () => {
    const result = randomNumber({ max: 1 })
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThan(1)
  })
})
