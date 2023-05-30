import { renderHook, act } from '@testing-library/react'
import { useDebounce } from './useDebounce'
import { test, describe, expect, vi } from 'vitest'

describe('useDebounce custom hook', () => {
  test('should return the initial value', () => {
    const { result } = renderHook(() => useDebounce('Hello', 500))
    expect(result.current).toBe('Hello')
  })

  test('should update debounced value after the delay', async () => {
    vi.useFakeTimers()
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'Hello', delay: 500 },
    })

    expect(result.current).toBe('Hello')

    act(() => {
      rerender({ value: 'World', delay: 500 })
    })

    expect(result.current).toBe('Hello')

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(result.current).toBe('World')

    vi.useRealTimers()
  })

  test('should update debounced value with the latest value', async () => {
    vi.useFakeTimers()
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'Hello', delay: 500 },
    })

    expect(result.current).toBe('Hello')

    act(() => {
      rerender({ value: 'World', delay: 500 })
    })

    expect(result.current).toBe('Hello')

    act(() => {
      vi.advanceTimersByTime(250)
    })

    expect(result.current).toBe('Hello')

    act(() => {
      rerender({ value: 'Hello, World', delay: 500 })
    })

    expect(result.current).toBe('Hello')

    act(() => {
      vi.advanceTimersByTime(250)
    })

    expect(result.current).toBe('Hello')

    act(() => {
      vi.advanceTimersByTime(250)
    })

    expect(result.current).toBe('Hello, World')

    vi.useRealTimers()
  })
})
