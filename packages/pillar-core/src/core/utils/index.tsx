import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'

interface CreateContextParams<T> {
  name: string
  initValue?: T
  error?: string
  required?: boolean
}

export function context<T extends object | null>({
  name,
  initValue,
  error = 'useContext must be used within a Provider.',
  required = false,
}: CreateContextParams<T>) {
  const CTX = createContext<T | undefined>(initValue)

  const Provider = ({ children, ...rest }: T & { children: ReactNode }) => (
    <CTX.Provider value={rest as T}>{children}</CTX.Provider>
  )

  function useContextCustom() {
    const context = useContext(CTX)
    if (!context && required) console.warn(error)
    return context
  }

  Provider.displayName = `${name}-Context`

  return [Provider, useContextCustom] as const
}

type ObjectType = Record<string, boolean>

type Args = string | number | ObjectType | Array<string | number | ObjectType | null | undefined> | null | undefined

export function cx(...args: Args[]): string {
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
