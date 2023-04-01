/**
 * Custom hook for determining whether the code is being executed in a browser or on the server.
 *
 * @returns {Object} An object containing boolean values indicating whether the code is being executed in a browser or on the server.
 */
export function useSsr() {
  // Check if the window object and its document and documentElement properties are defined
  const isBrowserEnvironment = typeof window !== 'undefined' && window.document && window.document.documentElement

  return {
    isBrowser: isBrowserEnvironment,
    isServer: !isBrowserEnvironment,
  }
}
