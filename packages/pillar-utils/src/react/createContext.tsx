import { ReactElement, createContext as createContextReact, useContext } from 'react'
import type { ReactNode } from 'react'

interface CreateContextParams<T> {
  name: string
  initValue?: T
  error?: string
  isContextRequired?: boolean
}

export function createContext<T extends object | null>({
  name,
  initValue,
  error = 'useContext must be used within a Provider.',
  isContextRequired = false,
}: CreateContextParams<T>) {
  const Context = createContextReact<T | undefined>(initValue)

  function Provider({ children, ...rest }: T & { children: ReactNode }): ReactElement {
    return <Context.Provider value={rest as T}>{children}</Context.Provider>
  }

  function useContextCustom() {
    const context = useContext(Context)
    if (!context && !!isContextRequired) {
      console.warn(error)
    }
    return context
  }

  Provider.displayName = `${name}-Context`

  return [Provider, useContextCustom] as const
}
