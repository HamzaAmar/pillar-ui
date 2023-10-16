import { ReactElement, createContext as createContextReact, useContext } from 'react'
import type { ReactNode } from 'react'

export function createContext<T extends object | null>(
  componentName: string,
  initialVal?: T,
  error: string = 'useContext must be used within a Provider.'
) {
  const Context = createContextReact<T | undefined>(initialVal)

  function Provider({ children, ...rest }: T & { children: ReactNode }): ReactElement {
    return <Context.Provider value={rest as T}>{children}</Context.Provider>
  }

  function useContextCustom() {
    const context = useContext(Context)
    if (!context) {
      console.warn(error)
    }
    return context
  }

  Provider.displayName = `${componentName}-Context`

  return [Provider, useContextCustom] as const
}
