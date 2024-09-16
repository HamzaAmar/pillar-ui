/**
 * Checks if a given locale is a valid locale string.
 *
 * @param {string} locale - The locale string to validate.
 * @returns {boolean} Returns true if the locale is valid, false otherwise.
 *
 * @example
 * isValidLocale('en-US'); // Output: true
 * isValidLocale('fr-FR'); // Output: true
 * isValidLocale('invalid'); // Output: false
 */
export function isValidLocale(locale: string): boolean {
  const localeRegex = /^[a-zA-Z]{2,3}(?:-[a-zA-Z]{2,3}(?:-[a-zA-Z]{4})?)?$/i
  if (!localeRegex.test(locale)) return false
  const canonicalLocales = Intl.getCanonicalLocales(locale)
  return canonicalLocales.length > 0 && canonicalLocales[0].toLowerCase() === locale.toLowerCase()
}
