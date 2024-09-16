export function toCapitalize(str: string): string {
  str = str.trim()
  return typeof str !== 'string' ? str : str[0].toUpperCase() + str.slice(1)
}
