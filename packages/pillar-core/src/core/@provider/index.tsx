import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { CreateContextParams } from './provider.type'

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
