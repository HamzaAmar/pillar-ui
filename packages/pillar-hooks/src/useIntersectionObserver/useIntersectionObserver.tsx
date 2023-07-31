import { useEffect, useRef } from 'react'

type IntersectionObserverOptions = IntersectionObserverInit & {
  root?: React.RefObject<HTMLElement> | null
}

const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement> | Array<React.RefObject<HTMLElement>>,
  options: IntersectionObserverOptions,
  callback: IntersectionObserverCallback
) => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observerOptions = {
      ...options,
      root: options.root?.current || null,
    }

    observer.current = new IntersectionObserver((entries) => {
      callback(entries, observer.current!)
    }, observerOptions)

    if (Array.isArray(ref)) {
      ref.forEach((r) => {
        if (r.current) {
          observer.current?.observe(r.current)
        }
      })
    } else {
      if (ref.current) {
        observer.current?.observe(ref.current)
      }
    }

    return () => {
      observer.current?.disconnect()
    }
  }, [ref, options, callback])
}

export default useIntersectionObserver
