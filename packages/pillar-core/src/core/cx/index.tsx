import type { CxArgs } from './cx.type'

export function cx(...args: CxArgs[]): string {
  let classNames: string[] = []

  for (let arg of args) {
    if (arg == null || !arg) continue
    else if (typeof arg === 'string' || typeof arg === 'number') {
      classNames.push(arg.toString().trim())
    } else if (Array.isArray(arg)) {
      arg.forEach((value) => value && classNames.push(value.toString()))
    } else {
      Object.entries(arg).forEach(([key, value]) => value && classNames.push(key))
    }
  }
  return classNames.join(' ').trim()
}
