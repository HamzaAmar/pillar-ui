import { useState, useRef, useCallback } from 'react'

import type { Dispatch, SetStateAction } from 'react'

export interface UseControllableStateParams<T> {
  controlledValue?: T
  defaultValue: T | (() => T)
}

/**
 * Custom hook for managing a state that can be controlled by an external value.
 *
 * @template T - The type of the state value.
 *
 * @param {UseControllableStateParams<T>} params - The parameters for the hook.
 *
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]} - A tuple containing the current state value and the state setter function.
 */
export function useControllableState<T>({
  controlledValue,
  defaultValue,
}: UseControllableStateParams<T>): [T, Dispatch<SetStateAction<T>>] {
  const isControlledRef = useRef(controlledValue !== undefined)

  const [state, setState] = useState<T>(() =>
    isControlledRef.current
      ? (controlledValue as T)
      : typeof defaultValue === 'function'
        ? (defaultValue as () => T)()
        : (defaultValue as T)
  )

  /**
   * The setter function.
   *
   * @param {React.SetStateAction<T>} newValue - The new value.
   * @returns {void}
   */
  const set: Dispatch<SetStateAction<T>> = useCallback((newValue) => {
    !isControlledRef.current && setState(newValue as T)
  }, [])

  return [isControlledRef.current ? (controlledValue as T) : state, set]
}
