import { renderHook, act } from '@testing-library/react'
import { useTimeout } from '.'
import { it, describe, expect, vi } from 'vitest'

describe('useTimeout custom hook', () => {
  vi.useFakeTimers()

  it('test valid callback and delay', () => {
    const callback = vi.fn()
    renderHook(() => useTimeout(callback, 100))
    expect(callback).not.toHaveBeenCalled()
    vi.advanceTimersByTime(100)
    expect(callback).toHaveBeenCalled()
  })

  it('test callback executed after delay', () => {
    const callback = vi.fn()
    renderHook(() => useTimeout(callback, 100))
    expect(callback).not.toHaveBeenCalled()
    vi.advanceTimersByTime(100)
    expect(callback).toHaveBeenCalled()
  })

  it('test clear timer function cancels timer', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useTimeout(callback, 100))
    expect(callback).not.toHaveBeenCalled()
    act(() => {
      result.current()
    })
    vi.advanceTimersByTime(100)
    expect(callback).not.toHaveBeenCalled()
  })

  // it('test invalid callback type', () => {
  //   expect(() => {
  //     // @ts-ignore
  //     renderHook(() => useTimeout('not a function', 100))
  //   }).toThrow('useTimeout: expects its parameter to be a function, but it received a [ string')
  // })

  // it('test delay is NaN', () => {
  //   expect(() => {
  //     renderHook(() => useTimeout(() => {}, NaN))
  //   }).toThrow('useTimeout: delay parameter cannot be NaN.')
  // })

  it('test callback not executed if component unmounts', () => {
    const callback = vi.fn()
    const { unmount } = renderHook(() => useTimeout(callback, 100))
    expect(callback).not.toHaveBeenCalled()
    unmount()
    vi.advanceTimersByTime(100)
    expect(callback).not.toHaveBeenCalled()
  })

  it('test delay can be set to 0', () => {
    const callback = vi.fn()
    renderHook(() => useTimeout(callback, 0))
    vi.advanceTimersByTime(0)
    expect(callback).toHaveBeenCalled()
  })

  it('test clear timer function can be called multiple times', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useTimeout(callback, 100))
    expect(callback).not.toHaveBeenCalled()
    act(() => {
      result.current()
      result.current()
      result.current()
    })
    vi.advanceTimersByTime(100)
    expect(callback).not.toHaveBeenCalled()
  })
})
