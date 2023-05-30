import { useMediaQuery } from '../useMediaQuery'
import type { UseMediaQueryOptions } from '../useMediaQuery'

export function usePreferColorScheme(initialValue?: 'dark' | 'light', options?: UseMediaQueryOptions) {
  return useMediaQuery('(prefers-color-scheme: dark)', initialValue === 'dark', options) ? 'dark' : 'light'
}
