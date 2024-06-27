import { useState, useRef, useEffect } from 'react'

/**
 * Custom hook for retrieving and monitoring the user's geolocation.
 *
 * @param {PositionOptions} [options] - Options for geolocation retrieval.
 * @returns {GeolocationState} - An object containing geolocation data and loading/error states.
 *
 * @example
 * // Example usage in a functional component:
 * import { useGeolocation } from '@pillar-ui/hooks'; // Adjust the path accordingly
 *
 * function GeolocationComponent() {
 *   const geolocation = useGeolocation();
 *
 *   if (geolocation.loading) {
 *     return <div>Loading...</div>;
 *   }
 *
 *   if (geolocation.error) {
 *     return <div>Error: {geolocation.error}</div>;
 *   }
 *
 *   return (
 *     <div>
 *       <p>Latitude: {geolocation.latitude}</p>
 *       <p>Longitude: {geolocation.longitude}</p>
 *       <p>Accuracy: {geolocation.accuracy} meters</p>
 *     </div>
 *   );
 * }
 */
export function useGeolocation(options: PositionOptions = {}) {
  const [state, setState] = useState<GeolocationState>({
    loading: true,
    accuracy: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 0,
    longitude: 0,
    speed: null,
    timestamp: null,
    error: null,
  })

  const optionsRef = useRef(options)

  useEffect(() => {
    const onEvent = ({ coords, timestamp }: GeolocationPosition) => {
      setState({
        loading: false,
        timestamp,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
        error: null,
      })
    }

    const onEventError = (error: GeolocationPositionError) => {
      setState((s) => ({
        ...s,
        loading: false,
        error: error.message,
      }))
    }

    if (!('geolocation' in navigator)) {
      setState((s) => ({
        ...s,
        loading: false,
        error: 'Geolocation is not supported by this browser, or it may be disabled. Please try to enable it.',
      }))
      return
    }

    navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
      if (permissionStatus.state !== 'granted') {
        setState((s) => ({
          ...s,
          loading: false,
          error: 'Permission denied',
        }))
      }
      if (permissionStatus.state === 'prompt') {
        setState((s) => ({
          ...s,
          loading: false,
          error: 'Permission prompt',
        }))
        return
      }
    })

    navigator.geolocation.getCurrentPosition(onEvent, onEventError, optionsRef.current)

    const watchId = navigator.geolocation.watchPosition(onEvent, onEventError, optionsRef.current)

    return () => {
      navigator.geolocation.clearWatch(watchId)
    }
  }, [])

  return state
}

export interface GeolocationState extends GeolocationCoordinates {
  loading: boolean
  timestamp: EpochTimeStamp | null
  error: string | null
}
