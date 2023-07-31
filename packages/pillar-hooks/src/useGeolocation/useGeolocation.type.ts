export interface GeolocationState extends GeolocationCoordinates {
  loading: boolean
  timestamp: EpochTimeStamp | null
  error: string | null
}
