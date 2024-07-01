import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useMouseMove } from '.'

describe('useMouseMove', () => {
  it('test initial position', () => {
    const { result } = renderHook(() => useMouseMove())
    expect(result.current.position).toEqual({ x: 0, y: 0 })
  })

  it('test on mouse move updates position', () => {
    const { result } = renderHook(() => useMouseMove())
    act(() => {
      result.current.onMouseMove({ pageX: 10, pageY: 20 } as MouseEvent)
    })
    expect(result.current.position).toEqual({ x: 10, y: 20 })
  })

  it('test on mouse move handles undefined values', () => {
    const { result } = renderHook(() => useMouseMove())
    act(() => {
      result.current.onMouseMove({} as MouseEvent)
    })
    expect(result.current.position).toEqual({ x: 0, y: 0 })
  })

  it('test returned object has position property', () => {
    const { result } = renderHook(() => useMouseMove())
    expect(result.current).toHaveProperty('position')
  })

  it('test returned object has on mouse move property', () => {
    const { result } = renderHook(() => useMouseMove())
    expect(result.current).toHaveProperty('onMouseMove')
  })
})
