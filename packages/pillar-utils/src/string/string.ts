/**
 * Return a slugified copy of a string.
 *
 * @param {string} str The string to be slugified
 * @return {string} The slugified string.
 */
export function toSlug(str: string): string {
  if (!str) {
    return ''
  }
  return str
    .toLowerCase()
    .trim()
    .replace(/ & /g, ' and ')
    .replace(/[ ]+/g, '-')
    .replace(/[-]+/g, '-') // Replace consecutive hyphens with a single hyphen
    .replace(/[^a-z0-9-]+/g, '') // Remove non-alphanumeric characters
    .replace(/^-|-$/g, '')
}
