import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from '.'
import { storageService } from './storageService'

// Helper function to clear local storage before each test
const clearLocalStorage = () => {
  window.localStorage.clear()
}

describe('useLocalStorage tests', () => {
  beforeEach(() => {
    clearLocalStorage()
  })

  afterAll(() => {
    clearLocalStorage()
  })

  test('should initialize with the initial value', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'randomKey', initialValue: 'initialValue' }))

    expect(result.current.value).toBe('initialValue')
  })

  test('should set the value to local storage when calling setValue', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'randomKey', initialValue: 'initialValue' }))
    const VALUE = 'new value'
    act(() => {
      result.current.setValue(VALUE)
    })

    expect(result.current.value).toBe(VALUE)
    expect(storageService.getItem('randomKey')).toBe(JSON.stringify(VALUE))
  })

  test('should remove the value from local storage when calling removeValue', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'randomKey', initialValue: 'initialValue' }))

    act(() => {
      result.current.removeValue()
    })

    expect(result.current.value).toBe('initialValue')
    expect(storageService.getItem('randomKey')).toBe(null)
  })
})
