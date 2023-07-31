import { useMediaQuery } from '../useMediaQuery'
import type { UseMediaQueryOptions } from '../useMediaQuery'

/**
 * A custom React hook to check whether the user has enabled the "reduce motion" preference.
 *
 * @param {boolean} [initialValue=false] - The optional initial value for the "reduce motion" preference (default is `false`).
 * @param {UseMediaQueryOptions} [options] - The optional options object for the `useMediaQuery` hook.
 *
 * @returns {boolean} - `true` if the user has enabled "reduce motion" preference, otherwise `false`.
 *
 * @example
 * // Example usage in a functional component:
 * function AnimationComponent() {
 *   const isReducedMotion = useReducedMotion();
 *
 *   return (
 *     <div>
 *       {isReducedMotion ? <p>Animations are disabled.</p> : <p>Animations are enabled.</p>}
 *     </div>
 *   );
 * }
 */
export function useReducedMotion(initialValue?: boolean, options?: UseMediaQueryOptions) {
  return useMediaQuery('(prefers-reduced-motion: reduce)', initialValue, options)
}
