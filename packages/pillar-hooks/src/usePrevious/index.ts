import * as React from 'react'

/**
 * A custom React hook to get the previous value of a state or prop.
 *
 * @template T - The type of the value to be stored.
 *
 * @param {T} value - The value whose previous value is to be tracked.
 *
 * @returns {T | undefined} - The previous value of the provided value, or `undefined` if there is no previous value.
 */
export function usePreviousValue<T>(value: T) {
  const ref = React.useRef<T | null>(null)

  React.useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
