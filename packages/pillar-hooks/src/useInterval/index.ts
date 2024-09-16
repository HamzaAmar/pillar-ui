import { useCallback, useRef, useState } from 'react'
import { usePersistentCallback } from '../usePersistentCallback'

/**
 * A custom React hook to create and manage an interval.
 *
 * @param {() => void} fn - The function to be called on each interval tick.
 * @param {number} interval - The interval duration in milliseconds (default is 150ms).
 *
 * @returns {{
 *   start: () => void,
 *   stop: () => void,
 *   toggle: () => void,
 *   active: boolean
 * }}
 *   An object containing methods to control the interval and the `active` state.
 *   - **start**: Start the interval.
 *   - **stop**: Stop the interval.
 *   - **toggle**: Toggle the interval (start if inactive, stop if active).
 *   - **active**: A boolean indicating whether the interval is currently active.
 *
 * @example
 * // Example usage in a functional component:
 * function IntervalComponent() {
 *   const { start, stop, toggle, active } = useInterval(() => {
 *     console.log('Interval tick');
 *   }, 1000);
 *
 *   return (
 *     <div>
 *       <p>Interval is {active ? 'active' : 'inactive'}</p>
 *       <button onClick={start}>Start Interval</button>
 *       <button onClick={stop}>Stop Interval</button>
 *       <button onClick={toggle}>Toggle Interval</button>
 *     </div>
 *   );
 * }
 */

export function useInterval(callback: () => void, interval: number = 150) {
  const [active, setActive] = useState(false)
  const intervalRef = useRef<number>()
  const persistedCallback = usePersistentCallback(callback)

  if (interval < 0) {
    console.error('useInterval: The interval should not be smaller than 0.')
  }

  if (isNaN(interval)) {
    console.error('useInterval: interval parameter cannot be NaN.')
  }

  const start = useCallback(() => {
    window.clearInterval(intervalRef.current)
    setActive((oldActive) => {
      if (!oldActive && persistedCallback) {
        intervalRef.current = window.setInterval(persistedCallback, interval)
      }
      return true
    })
  }, [interval, persistedCallback])

  const stop = useCallback(() => {
    if (intervalRef.current) {
      setActive(false)
      window.clearInterval(intervalRef.current)
      intervalRef.current = undefined
    }
  }, [])

  const toggle = useCallback(() => {
    active ? stop() : start()
  }, [stop, start, active])

  return { start, stop, toggle, active }
}
