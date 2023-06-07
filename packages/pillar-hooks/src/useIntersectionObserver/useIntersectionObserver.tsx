import { useCallback, useRef, useState } from 'react'

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

  const observer = useRef<IntersectionObserver | null>(null)

  const ref = useCallback(
    (element: T | null) => {
      if (observer.current) {
        observer.current.disconnect()
        observer.current = null
      }
      if (element) {
        observer.current = new IntersectionObserver(([entry]) => {
          setEntry(entry)
        }, options)

        observer.current.observe(element)
      }
    },
    [options]
  )

  return { ref, entry }
}
