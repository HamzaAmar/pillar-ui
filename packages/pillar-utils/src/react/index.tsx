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

/**
 * To put multiple refs on a single element.
 *
 * const combineRefs = makeCombineRefs<HTMLInputElement>(ref, forwardedRef);
 * <input ref={combineRefs} />
 *
 * @param {...Ref} refs One or more refs, forwarded refs, or ref callbacks
 * @returns {function} A function that updates each ref
 */

export const composeRef =
  <T extends HTMLElement = HTMLDivElement>(
    ...refs: (React.MutableRefObject<T> | React.ForwardedRef<T> | React.RefCallback<T> | null | undefined)[]
  ) =>
  (element: T | null): void => {
    refs.forEach((ref) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(element)
        } else if ('current' in ref) {
          ref.current = element
        }
      }
    })
  }

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
