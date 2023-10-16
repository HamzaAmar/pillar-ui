import * as React from 'react'

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

function composeRefs<T>(...refs: RefType<T>[]) {
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

export { composeRefs }
