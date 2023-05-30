import { useEffect, useRef, useState } from 'react'
import type { MediaQueryCallback, UseMediaQueryOptions } from './useMediaQuery.type'

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
