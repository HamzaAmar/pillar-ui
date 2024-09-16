import { toCapitalize } from '.'
import { describe, test, expect } from 'vitest'

describe('toCapitalize', () => {
  test('capitalizes the first letter of a string', () => {
    const input = 'hello world'
    const expectedOutput = 'Hello world'
    expect(toCapitalize(input)).toBe(expectedOutput)
  })

  test('returns an empty string if the input is empty', () => {
    const input = ''
    const expectedOutput = ''
    expect(toCapitalize(input)).toBe(expectedOutput)
  })

  test('capitalizes the first letter of a single-character string', () => {
    const input = 'a'
    const expectedOutput = 'A'
    expect(toCapitalize(input)).toBe(expectedOutput)
  })

  test('does not modify a string that is already capitalized', () => {
    const input = 'Hello'
    const expectedOutput = 'Hello'
    expect(toCapitalize(input)).toBe(expectedOutput)
  })

  test('does not modify a string that starts with a space', () => {
    const input = ' hello world'
    const expectedOutput = ' hello world'
    expect(toCapitalize(input)).toBe(expectedOutput)
  })
})
