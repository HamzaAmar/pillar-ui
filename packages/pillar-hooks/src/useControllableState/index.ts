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
 *
 * @example
 * // Example usage in a functional component:
 * import { useState } from 'react';
 * import { useControllableState } from '@pillar-ui/hooks'; // Adjust the path accordingly
 *
 * function ControllableStateComponent() {
 *   const [controlledValue, setControlledValue] = useState('Controlled Value');
 *   const [state, setState] = useControllableState({
 *     controlledValue,
 *     defaultValue: 'Default Value',
 *   });
 *
 *   return (
 *     <div>
 *       <p>State Value: {state}</p>
 *       <button onClick={() => setState('New Value')}>Change State</button>
 *     </div>
 *   );
 * }
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
