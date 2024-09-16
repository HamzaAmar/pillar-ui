import { useCallback } from 'react'

type RefType<T> = React.Ref<T> | undefined

export function useComposedRefs<T>(...refs: RefType<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    (node: T) => {
      refs.forEach((ref) => {
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref != null) {
          ;(ref as React.MutableRefObject<T>).current = node
        }
      })
    },
    [refs]
  )
}
