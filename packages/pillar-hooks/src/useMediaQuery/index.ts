import { useEffect, useRef, useState } from 'react'

function addMediaQueryChangeListener(query: MediaQueryList, callback: MediaQueryCallback) {
  try {
    query.addEventListener('change', callback)
    return () => query.removeEventListener('change', callback)
  } catch (e) {
    query.addListener(callback)
    return () => query.removeListener(callback)
  }
}

function getInitialValue(query: string, initValue?: boolean) {
  const isMediaQueryExist = 'matchMedia' in window
  const isBrowser = typeof window !== 'undefined'
  if (typeof initValue === 'boolean') {
    return initValue
  }

  if (isBrowser && isMediaQueryExist) {
    return window.matchMedia(query).matches
  }

  return false
}

/**
 * A custom React hook to track the state of a media query.
 *
 * @param {string} query - The media query string.
 * @param {boolean} [initialValue] - The optional initial value for the media query (default is `false`).
 * @param {Object} options - The options object.
 * @param {boolean} [options.getInitialValueInEffect=true] - Whether to fetch the initial value in the effect or at initialization (default is `true`).
 * @returns {boolean} - `true` if the media query matches, otherwise `false`.
 *
 * @example
 * // Example usage in a functional component:
 * function MediaQueryComponent() {
 *   const isSmallScreen = useMediaQuery('(max-width: 768px)');
 *
 *   return (
 *     <div>
 *       {isSmallScreen ? <p>Small Screen</p> : <p>Large Screen</p>}
 *     </div>
 *   );
 * }
 */

export function useMediaQuery(
  query: string,
  initialValue?: boolean,
  { getInitialValueInEffect }: UseMediaQueryOptions = {
    getInitialValueInEffect: true,
  }
) {
  const [matches, setMatches] = useState(getInitialValueInEffect ? initialValue : getInitialValue(query, initialValue))
  const queryRef = useRef<MediaQueryList>()

  useEffect(() => {
    if ('matchMedia' in window) {
      queryRef.current = window.matchMedia(query)
      setMatches(queryRef.current.matches)
      return addMediaQueryChangeListener(queryRef.current, (event) => setMatches(event.matches))
    }
    return
  }, [query])

  return matches
}

export interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean
}

export type MediaQueryCallback = (event: { matches: boolean; media: string }) => void
