import { describe, test, expect } from 'vitest'
import { isEmptyObject } from '..'

describe('isEmptyObject', () => {
  test('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true)
  })

  test('should return false for an object with properties', () => {
    expect(isEmptyObject({ key: 'value' })).toBe(false)
  })

  test('should return false for an object with nested empty object', () => {
    expect(isEmptyObject({ nestedObj: {} })).toBe(false)
  })

  test('should return true for an empty array', () => {
    expect(isEmptyObject([])).toBe(true)
  })

  test('should return false for a non-empty array', () => {
    expect(isEmptyObject([1, 2, 3])).toBe(false)
  })

  test('should return true for a Date object', () => {
    expect(isEmptyObject(new Date())).toBe(true)
  })

  test('should return false for an object with undefined property', () => {
    expect(isEmptyObject({ key: undefined })).toBe(false)
  })

  test('should return false for an object with null property', () => {
    expect(isEmptyObject({ key: null })).toBe(false)
  })

  test('should return false for an object with null property', () => {
    // @ts-ignore
    expect(isEmptyObject(null)).toBe(false)
  })
})
