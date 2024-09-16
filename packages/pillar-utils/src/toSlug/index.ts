/**
 * Return a slugified copy of a string.
 *
 * @param {string} str The string to be slugified
 * @return {string} The slugified string.
 */
export const toSlug = (str: string) => {
  return str.trim().length === 0
    ? ''
    : str
        .toLowerCase()
        .trim()
        .replace(/ & /g, ' and ')
        .replace(/[ ]+/g, '-')
        .replace(/[-]+/g, '-')
        .replace(/[^a-z0-9-]+/g, '')
        .replace(/^-|-$/g, '')
}
