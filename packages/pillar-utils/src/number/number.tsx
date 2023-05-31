import type { RandomNumber } from './number.type'

/**
 * Clamps a value between a minimum and maximum range.
 * @param {number} value - The value to clamp.
 * @param {[number, number]} range - The minimum and maximum values defining the range.
 * @returns {number} - The clamped value.
 */
export function clamp(value: number, [min, max]: [number, number]): number {
  return Math.min(max, Math.max(min, value))
}

/**
 * Generates a random number within a specified range.
 * @param {{ min?: number, max: number, rounded?: boolean }} options - The options object.
 * @param {number} options.min - The minimum value of the range (inclusive). Default: 0.
 * @param {number} options.max - The maximum value of the range (exclusive).
 * @param {boolean} options.rounded - Whether to round the generated number to the nearest integer. Default: false.
 * @returns {number} - The generated random number.
 */
export function randomNumber({ min = 0, max, rounded = false }: RandomNumber): number {
  const randomNumber = Math.random() * (max - min) + min
  return rounded ? Math.floor(randomNumber) : randomNumber
}

/**
 * Formats a price value as a currency string using the specified locale and currency.
 * @param {number} price - The price value to format.
 * @param {string} [locale='en-US'] - The locale to use for formatting the currency.
 * @param {string} [currency='USD'] - The currency code to use for formatting the price.
 * @returns {string} - The formatted price as a currency string.
 */
export function formatPrice(price: number, locale = 'en-US', currency = 'USD') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price)
}
