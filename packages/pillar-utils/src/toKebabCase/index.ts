export const toKebabCase = (str: string) =>
  str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
