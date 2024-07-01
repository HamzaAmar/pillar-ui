/**
 * A custom React hook to determine if the code is running in a server-side rendering (SSR) environment or a client-side (browser) environment.
 *
 * @returns {{
 *   isBrowser: boolean, // A boolean indicating if the code is running in a browser environment.
 *   isServer: boolean   // A boolean indicating if the code is running in a server-side rendering (SSR) environment.
 * }}
 *   An object containing environment information.
 *   - isBrowser: `true` if the code is running in a browser environment, otherwise `false`.
 *   - isServer: `true` if the code is running in a server-side rendering (SSR) environment, otherwise `false`.
 *
 * @example
 * // Example usage in a functional component:
 * function MyComponent() {
 *   const { isBrowser, isServer } = useSsr();
 *
 *   return (
 *     <div>
 *       {isBrowser ? <p>Client-side rendering</p> : <p>Server-side rendering</p>}
 *     </div>
 *   );
 * }
 */
export function useSsr() {
  // Check if the window object and its document and documentElement properties are defined
  const isBrowserEnvironment = typeof window !== 'undefined' && window.document && window.document.documentElement

  return {
    isBrowser: isBrowserEnvironment,
    isServer: !isBrowserEnvironment,
  }
}
