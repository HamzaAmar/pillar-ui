import { formatPrice } from '../number'
import { describe, test, expect } from 'vitest'

describe('formatPrice function', () => {
  test('should format the price with the default locale and currency', () => {
    const price = 10.99
    const expected = '$10.99'
    const result = formatPrice(price)
    expect(result).toBe(expected)
  })

  test('should format the price with the specified locale and currency', () => {
    const price = 1000.5
    const locale = 'de-DE'
    const currency = 'EUR'
    const expected = '1.000,50 €'
    const result = formatPrice(price, locale, currency)
    expect(result).toBe(expected)
  })

  test('should format zero price', () => {
    const price = 0
    const expected = '$0.00'
    const result = formatPrice(price)
    expect(result).toBe(expected)
  })

  test('should format negative price', () => {
    const price = -20.5
    const expected = '-$20.50'
    const result = formatPrice(price)
    expect(result).toBe(expected)
  })

  test('should format price with different locales', () => {
    const price = 1000.5
    const locales = ['en-US', 'de-DE', 'fr-FR', 'ja-JP']
    const currencies = ['USD', 'EUR', 'EUR', 'JPY']
    const expectedResults = ['$1,000.50', '1.000,50 €', '1 000,50 €', '￥1,001']

    locales.forEach((locale, index) => {
      const currency = currencies[index]
      const expected = expectedResults[index]
      const result = formatPrice(price, locale, currency)
      expect(result).toBe(expected)
    })
  })

  test('should format large price', () => {
    const price = 9999999.99
    const expected = '$9,999,999.99'
    const result = formatPrice(price)
    expect(result).toBe(expected)
  })
})
