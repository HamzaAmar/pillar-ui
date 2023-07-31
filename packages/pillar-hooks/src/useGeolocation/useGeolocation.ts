import { useState, useRef, useEffect } from 'react'
import type { GeolocationState } from './useGeolocation.type'

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