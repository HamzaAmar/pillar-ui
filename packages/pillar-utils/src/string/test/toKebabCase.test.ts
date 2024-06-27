import { describe, test, expect } from 'vitest'
import { toKebabCase } from '..'

describe('toKebabCase', () => {
  test('converts a string to kebab case', () => {
    const input = 'helloWorld'
    const expectedOutput = 'hello-world'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  test('converts a string with spaces to kebab case', () => {
    const input = 'hello world'
    const expectedOutput = 'hello-world'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  test('converts a string with mixed case to kebab case', () => {
    const input = 'HelloWorld'
    const expectedOutput = 'hello-world'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  test('converts a string with multiple consecutive spaces to kebab case', () => {
    const input = 'hello   world'
    const expectedOutput = 'hello-world'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  test('converts an empty string to an empty kebab case', () => {
    const input = ''
    const expectedOutput = ''
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  test('converts a string with leading and trailing spaces to kebab case', () => {
    const input = '  hello world  '
    const expectedOutput = 'hello-world'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })
})
