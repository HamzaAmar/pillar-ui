import { describe, test, expect } from 'vitest'
import { isValidJSON } from '../is' // Replace "your-file" with the actual file path

describe('isValidURL Test', () => {
  test('isValidJSON function - case: valid JSON string', () => {
    let result = isValidJSON('{"name":"John", "age":30, "city":"New York"}')
    expect(result).toBe(true)
  })

  test('isValidJSON function - case: invalid JSON string', () => {
    let result = isValidJSON('{name:John, age:30, city:New York}')
    expect(result).toBe(false)
  })

  test('isValidJSON function - case: empty string', () => {
    let result = isValidJSON('')
    expect(result).toBe(false)
  })

  test('isValidJSON function - case: non-JSON string', () => {
    let result = isValidJSON('Hello, World!')
    expect(result).toBe(false)
  })

  test('isValidJSON function - case: number string', () => {
    let result = isValidJSON('12345')
    expect(result).toBe(false)
  })

  test('isValidJSON function - case: empty string', () => {
    let result = isValidJSON('')
    expect(result).toBe(false)
  })

  test('isValidJSON function - case: empty string', () => {
    let result = isValidJSON('')
    expect(result).toBe(false)
  })

  test('isValidJSON function - case: empty string', () => {
    let result = isValidJSON('function(){}')
    expect(result).toBe(false)
  })
})
