import { useCallback } from 'react'
import { composeRefs } from '@pillar-ui/utils'

type RefType<T> = React.Ref<T> | undefined

export function useComposedRefs<T>(...refs: RefType<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(composeRefs(...refs), refs)
}
