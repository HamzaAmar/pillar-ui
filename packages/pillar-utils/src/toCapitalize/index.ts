export function toCapitalize(str: string): string {
  str = str.trim()
  return str[0].toUpperCase() + str.slice(1)
}
