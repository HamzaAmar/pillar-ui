import { useEffect, useLayoutEffect } from 'react'

/**
 * A custom React hook that provides an isomorphic version of `useLayoutEffect`.
 * It selects `useLayoutEffect` in the browser environment and `useEffect` in the server (Node.js) environment.
 *
 * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 *
 * @param {Function} effect - The effect function to run after the component renders.
 * @param {Array<any>} dependencies - An optional array of dependencies for the effect.
 *
 * @example
 * // Example usage in a functional component:
 * function IsomorphicLayoutEffectComponent() {
 *   useIsomorphicLayoutEffect(() => {
 *     // This effect will run synchronously in the browser (useLayoutEffect)
 *     // and asynchronously in Node.js (useEffect).
 *     console.log('Component rendered');
 *   }, []);
 *
 *   return <div>Example Component</div>;
 * }
 */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
