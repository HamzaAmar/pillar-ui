import { renderHook, act } from '@testing-library/react'
import { useBooleanState } from '.'
import { test, describe, expect } from 'vitest'

describe('useBooleanState', () => {
  test('should return an object with the current boolean value and functions for updating it', () => {
    const { result } = renderHook(() => useBooleanState())

    expect(result.current.value).toBe(false)
    expect(result.current.setTrue).toBeDefined()
    expect(result.current.setFalse).toBeDefined()
    expect(result.current.toggle).toBeDefined()
  })
  test('should initialize with the provided default value', () => {
    const { result } = renderHook(() => useBooleanState(true))

    expect(result.current.value).toBe(true)
  })

  test('should set the boolean value to true when the setTrue function is called', () => {
    const { result } = renderHook(() => useBooleanState())

    expect(result.current.value).toBe(false)

    act(() => result.current.setTrue())

    expect(result.current.value).toBe(true)
  })

  test('should set the boolean value to false when the setFalse function is called', () => {
    const { result } = renderHook(() => useBooleanState())
    act(() => result.current.setFalse())
    expect(result.current.value).toBe(false)
  })

  test('should toggle the boolean value when the toggle function is called', () => {
    const { result } = renderHook(() => useBooleanState())

    act(() => result.current.toggle())

    expect(result.current.value).toBe(true)

    act(() => result.current.toggle())

    expect(result.current.value).toBe(false)
  })
})
