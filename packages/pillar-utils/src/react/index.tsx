/**
 * Composes multiple event handlers into a single handler.
 *
 * @template T - The type of the event object.
 * @param {...((event: T) => void)} handlers - The event handlers to compose.
 * @returns {(event: T) => void} - The composed event handler.
 */
export function composeEventHandlers<T extends MouseEvent>(...handlers: ((event: T) => void)[]): (event: T) => void {
  return (event: T) => {
    for (const handler of handlers) {
      if (typeof handler === 'function') {
        handler(event)
      }
    }
  }
}

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

type RefType<T> = React.Ref<T> | undefined

/**
 * To put multiple refs on a single element.
 *
 * const combineRefs = makeCombineRefs<HTMLInputElement>(ref, forwardedRef);
 * <input ref={combineRefs} />
 *
 * @param {...Ref} refs One or more refs, forwarded refs, or ref callbacks
 * @returns {function} A function that updates each ref
 */

export function composeRefs<T>(...refs: RefType<T>[]) {
  return (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref != null) {
        ;(ref as React.MutableRefObject<T>).current = node
      }
    })
  }
}
