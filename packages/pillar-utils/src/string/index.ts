/**
 * Return a slugified copy of a string.
 *
 * @param {string} str The string to be slugified
 * @return {string} The slugified string.
 */
export function toSlug(str: string): string {
  if (!str || str.trim().length === 0) return ''
  return str
    .toLowerCase()
    .trim()
    .replace(/ & /g, ' and ')
    .replace(/[ ]+/g, '-')
    .replace(/[-]+/g, '-') // Replace consecutive hyphens with a single hyphen
    .replace(/[^a-z0-9-]+/g, '') // Remove non-alphanumeric characters
    .replace(/^-|-$/g, '')
}

export function toCapitalize(str: string): string {
  if (!str || typeof str !== 'string') return str
  str = str.trim()
  return str[0].toUpperCase() + str.slice(1)
}

export function toKebabCase(str: string): string {
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}
