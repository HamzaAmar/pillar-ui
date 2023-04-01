export interface UseControllableStateParams<T> {
  controlledValue?: T
  defaultValue: T | (() => T)
}
