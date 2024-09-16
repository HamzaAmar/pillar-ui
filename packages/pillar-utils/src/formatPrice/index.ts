/**
 * Formats a price value as a currency string using the specified locale and currency.
 * @param {number} price - The price value to format.
 * @param {string} [locale='en-US'] - The locale to use for formatting the currency.
 * @param {string} [currency='USD'] - The currency code to use for formatting the price.
 * @returns {string} - The formatted price as a currency string.
 */

export const formatPrice = (price: number, locale = 'en-US', currency = 'USD') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(price)
