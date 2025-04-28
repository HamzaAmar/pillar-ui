import { useMediaQuery } from '../useMediaQuery'
import type { UseMediaQueryOptions } from '../useMediaQuery'

/**
 * Custom hook to create a persistent callback that maintains its reference between renders.
 *
 * @template T - The type of the callback function.
 *
 * @param {T | undefined} callback - The callback function to be persisted.
 * @returns {T | undefined} - The persisted callback function.
 */
export function usePreferColorScheme(initialValue?: 'dark' | 'light', options?: UseMediaQueryOptions) {
  return useMediaQuery('(prefers-color-scheme: dark)', initialValue === 'dark', options) ? 'dark' : 'light'
}
