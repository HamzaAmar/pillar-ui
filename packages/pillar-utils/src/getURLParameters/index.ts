export function getURLParameters(url: string): { [key: string]: string } {
  const params = new URLSearchParams(new URL(url).search)
  const obj: { [key: string]: string } = {}
  for (const [key, value] of params.entries()) {
    obj[key] = value
  }
  return obj
}
