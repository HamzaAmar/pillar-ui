import { describe, test, expect } from 'vitest'
import { isValidCreditCardNumber } from '../is' // Replace "your-file" with the actual file path

describe('isValidURL Test', () => {
  test('isValidCreditCardNumber True', () => {
    // Test case where cardNumber is a valid 13-digit credit card number
    let result = isValidCreditCardNumber('4222222222222')
    expect(result).toBe(true)

    // Test case where cardNumber is a valid 15-digit credit card number
    result = isValidCreditCardNumber('378282246310005')
    expect(result).toBe(true)

    // Test case where cardNumber is a valid 16-digit credit card number with spaces between digits
    result = isValidCreditCardNumber('6011 1111 1111 1117')
    expect(result).toBe(true)

    // Test case where cardNumber has leading and trailing spaces
    result = isValidCreditCardNumber(' 378282246310005 ')
    expect(result).toBe(true)
  })

  test('isValidCreditCardNumber Falsy', () => {
    // Test case where cardNumber is an invalid credit card number
    let result = isValidCreditCardNumber('1234567812345678')
    expect(result).toBe(false)

    // Test case where cardNumber is an empty string
    result = isValidCreditCardNumber('')
    expect(result).toBe(false)

    // Test case where cardNumber contains non-digit characters
    result = isValidCreditCardNumber('4532a015112830366')
    expect(result).toBe(false)
  })
})
