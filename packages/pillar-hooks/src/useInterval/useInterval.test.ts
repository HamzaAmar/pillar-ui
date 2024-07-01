import { renderHook, act } from '@testing-library/react'
import { useInterval } from '.'
import { test, describe, expect, vi } from 'vitest'

describe('useInterval custom hook', () => {
  test('test valid parameters', () => {
    const mockFn = vi.fn()
    const { result } = renderHook(() => useInterval(mockFn, 100))

    expect(result.current.start).toBeDefined()
    expect(result.current.stop).toBeDefined()
    expect(result.current.toggle).toBeDefined()
    expect(typeof result.current.start).toBe('function')
    expect(typeof result.current.stop).toBe('function')
    expect(typeof result.current.toggle).toBe('function')
  })

  test('test default value', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useInterval(callback, 100))
    expect(result.current.active).toBe(false)
  })

  test('test default value', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useInterval(callback, 100))
    expect(result.current.active).toBe(false)
    act(() => {
      result.current.start()
    })
    expect(result.current.active).toBe(true)
  })

  test('test default value', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useInterval(callback, 100))
    expect(result.current.active).toBe(false)
    act(() => {
      result.current.toggle()
    })
    act(() => {
      result.current.toggle()
    })

    expect(result.current.active).toBe(false)
  })
})
