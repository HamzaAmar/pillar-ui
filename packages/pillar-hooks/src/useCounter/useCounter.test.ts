import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'
import { test, describe, expect } from 'vitest'

describe('useCounter custom hook', () => {
  test('useCounter work with initial value of increment and decrement', () => {
    const { result } = renderHook(() => useCounter({ value: 10 }))
    expect(result.current.count).toBe(10)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(11)

    act(() => {
      result.current.decrement()
      result.current.decrement()
      result.current.decrement()
      result.current.decrement()
    })

    expect(result.current.count).toBe(7)
  })

  test('useCounter with value to increment and decrement', () => {
    const { result } = renderHook(() => useCounter({ value: 10 }))
    expect(result.current.count).toBe(10)

    act(() => {
      result.current.increment(5)
    })

    expect(result.current.count).toBe(15)

    act(() => {
      result.current.decrement(2)
      result.current.decrement(2)
      result.current.decrement(2)
      result.current.decrement(2)
    })

    expect(result.current.count).toBe(7)
  })

  test('should not increment, decrement count beyond the (min,max) value', () => {
    const { result } = renderHook(() => useCounter({ value: 5, min: 0, max: 10 }))
    act(() => {
      result.current.increment(2)
    })
    expect(result.current.count).toBe(7)
    act(() => {
      result.current.increment(2)
    })
    expect(result.current.count).toBe(9)

    act(() => {
      result.current.increment(2)
    })
    expect(result.current.count).toBe(10)

    act(() => {
      result.current.decrement(5)
    })
    expect(result.current.count).toBe(5)
    act(() => {
      result.current.decrement(5)
    })
    expect(result.current.count).toBe(0)
  })
})
