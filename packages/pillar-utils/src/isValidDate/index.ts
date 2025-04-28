/**
 * Checks if a string is a valid date.
 * @param {string} dateString - The string to check.
 * @returns {boolean} - Returns true if the string is a valid date, false otherwise.
 */
export function isValidDate(dateString: Date | string): boolean {
  const date = new Date(dateString)
  if (date.toString() === 'Invalid Date' || isNaN(date.getTime())) return false

  return true
}
