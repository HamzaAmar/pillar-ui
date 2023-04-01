import { useState, useRef, useCallback } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { UseControllableStateParams } from './useControllableState.type'

/**
 * A hook that creates a state variable that can be either controlled or uncontrolled.
 * If `controlledValue` is defined, the hook returns it and a setter function that updates it.
 * If `controlledValue` is not defined, the hook returns a state variable initialized to
 * `defaultValue` and a setter function that updates it.
 *
 * @template T - The type of the state variable.
 * @param {UseControllableStateParams<T>} options - The options object.
 * @param {T} options.controlledValue - The controlled value.
 * @param {T | (() => T)} options.defaultValue - The default value or a function that returns the default value.
 * @returns {[T, Dispatch<SetStateAction<T>>]} - An array containing the current value and a setter function.
 */
export function useControllableState<T>({
  controlledValue,
  defaultValue,
}: UseControllableStateParams<T>): [T, Dispatch<SetStateAction<T>>] {
  const isControlled = controlledValue !== undefined
  const isControlledRef = useRef(isControlled)

  const [state, setState] = useState<T>(() => {
    if (isControlledRef.current) {
      return controlledValue as T
    }
    if (typeof defaultValue === 'function') {
      return (defaultValue as () => T)()
    }
    return defaultValue as T
  })

  /**
   * The setter function.
   *
   * @param {React.SetStateAction<T>} newValue - The new value.
   * @returns {void}
   */
  const set: Dispatch<SetStateAction<T>> = useCallback((newValue) => {
    if (!isControlledRef.current) {
      setState(newValue as T)
    }
  }, [])

  return [isControlledRef.current ? (controlledValue as T) : state, set]
}
