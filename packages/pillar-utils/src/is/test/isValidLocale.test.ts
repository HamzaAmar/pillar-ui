import { isValidLocale } from '../is'
import { describe, test, expect } from 'vitest'

describe('isValidLocale', () => {
  test('should return true for valid two-letter locale codes', () => {
    expect(isValidLocale('en')).toBe(true)
    expect(isValidLocale('fr')).toBe(true)
  })

  test('should return true for valid three-letter locale codes', () => {
    expect(isValidLocale('eng')).toBe(false)
    expect(isValidLocale('fra')).toBe(false)
  })

  test('should return true for valid locale codes with a region subtag', () => {
    expect(isValidLocale('en-US')).toBe(true)
    expect(isValidLocale('fr-FR')).toBe(true)
  })

  //   test('should return true for valid locale codes with a script subtag', () => {
  //     expect(isValidLocale('zh-Hans')).toBe(true)
  //     expect(isValidLocale('zh-Hant')).toBe(true)
  //   })

  //   test('should return true for valid locale codes with an extended language subtag', () => {
  //     expect(isValidLocale('az-Latn-az')).toBe(true)
  //     expect(isValidLocale('az-Cyrl-az')).toBe(true)
  //   })

  test('should return false for invalid locale codes with extra subtags', () => {
    expect(isValidLocale('en-US-extra')).toBe(false)
    expect(isValidLocale('fr-FR-extra')).toBe(false)
  })

  test('should return false for invalid locale codes with missing subtags', () => {
    expect(isValidLocale('en-')).toBe(false)
    expect(isValidLocale('fr-')).toBe(false)
  })

  test('should return true for Uppercase locale codes', () => {
    expect(isValidLocale('En')).toBe(true)
    expect(isValidLocale('FR')).toBe(true)
  })

  test('should return false for invalid locale codes with numbers', () => {
    expect(isValidLocale('en-US123')).toBe(false)
    expect(isValidLocale('fr-FR456')).toBe(false)
  })

  test('should return false for invalid locale codes with special characters', () => {
    expect(isValidLocale('en_US')).toBe(false)
    expect(isValidLocale('fr@FR')).toBe(false)
  })

  test('should return false for invalid locale codes with spaces', () => {
    expect(isValidLocale('en US')).toBe(false)
    expect(isValidLocale('fr-FR ')).toBe(false)
  })

  test('should return false for invalid locale codes with invalid characters', () => {
    expect(isValidLocale('en-US-!')).toBe(false)
    expect(isValidLocale('fr-FR-$')).toBe(false)
  })
})
