export interface UseLocalStorageParams<T> {
  key: string
  initialValue: T
  serialize?: (value: T) => string
  deserialize?: (value: string) => T
}
