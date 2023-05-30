import { useMediaQuery } from '../useMediaQuery'
import type { UseMediaQueryOptions } from '../useMediaQuery'

export function useReducedMotion(initialValue?: boolean, options?: UseMediaQueryOptions) {
  return useMediaQuery('(prefers-reduced-motion: reduce)', initialValue, options)
}
