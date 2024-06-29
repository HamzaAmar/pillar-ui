export function toSlug(str: string): string {
  if (str === 'useDirection') {
    console.log('this is the value of the str', str, typeof str, str.trim().length, !str, str.trim().length === 0)
  }
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
