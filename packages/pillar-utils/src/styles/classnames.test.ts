import { describe, it, expect } from 'vitest'
import { cx } from '.' // Adjust the import path as needed

describe('cx function', () => {
  it('should handle empty input', () => {
    expect(cx()).toBe('')
  })

  it('should handle null and undefined', () => {
    expect(cx(null, undefined)).toBe('')
  })

  it('should handle single string', () => {
    expect(cx('foo')).toBe('foo')
  })

  it('should handle single number', () => {
    expect(cx(42)).toBe('42')
  })

  it('should handle multiple strings and numbers', () => {
    expect(cx('foo', 'bar', 42)).toBe('foo bar 42')
  })

  it('should handle arrays of strings and numbers', () => {
    expect(cx(['foo', 'bar', 42])).toBe('foo bar 42')
  })

  it('should handle objects', () => {
    expect(cx({ foo: true, bar: false, baz: true })).toBe('foo baz')
  })

  it('should handle combination of different types', () => {
    expect(cx('foo', 42, ['bar', 'baz'], { qux: true, quux: false })).toBe('foo 42 bar baz qux')
  })

  it('should handle falsy values in arrays', () => {
    expect(cx(['foo', '', null, undefined, 0, 'bar'])).toBe('foo bar')
  })

  it('should handle empty strings', () => {
    expect(cx('', ' foo ', '')).toBe('foo')
  })

  it('should handle all falsy values', () => {
    expect(cx(null, undefined, '', 0, NaN)).toBe('')
  })

  it('should handle repeated values', () => {
    expect(cx('foo', 'foo', 'bar', 'foo')).toBe('foo foo bar foo')
  })
})
