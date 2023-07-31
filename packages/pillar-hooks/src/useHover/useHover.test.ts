import { renderHook, act } from '@testing-library/react'
import { useHover } from './useHover'
import { it, describe, expect } from 'vitest'

describe('UseHover custom hook', () => {
  it('test default state', () => {
    const { result } = renderHook(() => useHover())
    expect(result.current.isHovered).toBe(false)
  })

  it('test on mouse enter', () => {
    const { result } = renderHook(() => useHover())
    act(() => {
      result.current.hoverHandlers.onMouseEnter()
    })
    expect(result.current.isHovered).toBe(true)
  })

  it('test on mouse leave', () => {
    const { result } = renderHook(() => useHover())
    act(() => {
      result.current.hoverHandlers.onMouseEnter()
    })
    expect(result.current.isHovered).toBe(true)
    act(() => {
      result.current.hoverHandlers.onMouseLeave()
    })
    expect(result.current.isHovered).toBe(false)
  })

  it('test hover handlers', () => {
    const { result } = renderHook(() => useHover())
    expect(result.current.hoverHandlers).toEqual({
      onMouseEnter: expect.any(Function),
      onMouseLeave: expect.any(Function),
    })
  })

  it('test empty hover handlers', () => {
    const { result } = renderHook(() => useHover())
    expect(result.current.hoverHandlers).toEqual({
      onMouseEnter: expect.any(Function),
      onMouseLeave: expect.any(Function),
    })
  })

  it('test on mouse enter memoization', () => {
    const { result, rerender } = renderHook(() => useHover())
    const currentVal = result.current.hoverHandlers.onMouseEnter
    rerender()
    expect(result.current.hoverHandlers.onMouseEnter).toStrictEqual(currentVal)
  })

  it('test on mouse leave memoization', () => {
    const { result, rerender } = renderHook(() => useHover())
    const initialOnMouseLeave = result.current.hoverHandlers.onMouseLeave
    rerender()
    expect(result.current.hoverHandlers.onMouseLeave).toStrictEqual(initialOnMouseLeave)
  })

  it('test hover handlers memoization', () => {
    const { result, rerender } = renderHook(() => useHover())
    const initialHoverHandlers = result.current.hoverHandlers
    rerender()
    expect(result.current.hoverHandlers).toStrictEqual(initialHoverHandlers)
  })

  it('test hover handlers not changed', () => {
    const { result, rerender } = renderHook(() => useHover())
    const initialHoverHandlers = result.current.hoverHandlers
    act(() => {
      result.current.hoverHandlers.onMouseEnter()
    })
    rerender()
    expect(result.current.hoverHandlers).toStrictEqual(initialHoverHandlers)
  })

  it('test is hovered type', () => {
    const { result } = renderHook(() => useHover())
    expect(typeof result.current.isHovered).toBe('boolean')
  })
})
