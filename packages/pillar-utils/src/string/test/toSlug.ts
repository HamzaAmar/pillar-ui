import { describe, it, expect } from 'vitest'
import { toSlug } from '../string'

describe('toSlug', () => {
  it('should convert string to slug format', () => {
    expect(toSlug('Hello World')).toBe('hello-world')
    expect(toSlug('Lorem ipsum dolor sit amet')).toBe('lorem-ipsum-dolor-sit-amet')
    expect(toSlug('123')).toBe('123')
    expect(toSlug('Special characters & symbols !@#$%^')).toBe('special-characters-and-symbols')
  })

  it('should return an empty string for empty input', () => {
    expect(toSlug('')).toBe('')
  })

  it('should remove consecutive hyphens and leading/trailing hyphens', () => {
    expect(toSlug('test------slug')).toBe('test-slug')
    expect(toSlug('test     slug')).toBe('test-slug')
    expect(toSlug('-test-slug-')).toBe('test-slug')
  })

  it('should remove non-alphanumeric characters', () => {
    expect(toSlug('test!slug')).toBe('testslug')
    expect(toSlug('test@slug#')).toBe('testslug')
  })

  it('should remove white space from the begging of the string', () => {
    expect(toSlug(' test ')).toBe('test')
    expect(toSlug('test    ')).toBe('test')
    expect(toSlug('      test    ')).toBe('test')
  })
})
