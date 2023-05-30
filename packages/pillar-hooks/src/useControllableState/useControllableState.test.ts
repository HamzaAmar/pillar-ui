import { renderHook, act } from '@testing-library/react'
import { useControllableState } from './useControllableState'
import { test, describe, expect } from 'vitest'

describe('useControllableState custom hook', () => {
  test('should return the controlled value when defined', () => {
    const { result } = renderHook(() =>
      useControllableState({ controlledValue: 'controlled', defaultValue: 'default' })
    )
    expect(result.current[0]).toBe('controlled')
  })

  test('should return the default value when controlled value is not defined', () => {
    const { result } = renderHook(() => useControllableState({ defaultValue: 'default' }))
    expect(result.current[0]).toBe('default')
  })

  test('should update the state when not controlled', () => {
    const { result } = renderHook(() => useControllableState({ defaultValue: 'default' }))

    act(() => {
      result.current[1]('updated')
    })
    expect(result.current[0]).toBe('updated')
  })

  test('should not update the state when controlled', () => {
    const { result } = renderHook(() =>
      useControllableState({ controlledValue: 'controlled', defaultValue: 'default' })
    )

    act(() => {
      result.current[1]('updated')
    })
    expect(result.current[0]).toBe('controlled')
  })
})
