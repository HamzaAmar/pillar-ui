import React from 'react'
import { render, act, renderHook } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
import { useDimension } from '.'

describe('useDimension', () => {
  let resizeObserverMock: {
    observe: Mock
    disconnect: Mock
  }

  beforeEach(() => {
    resizeObserverMock = {
      observe: vi.fn(),
      disconnect: vi.fn(),
    }
    ;(global as any).ResizeObserver = vi.fn().mockImplementation(() => resizeObserverMock)
  })

  it('should initialize with default size', () => {
    const { result } = renderHook(() => useDimension({ current: null }))
    expect(result.current).toEqual({ width: 0, height: 0 })
  })

  it('should not observe when element is null', () => {
    renderHook(() => useDimension({ current: null }))
    expect(resizeObserverMock.observe).not.toHaveBeenCalled()
  })

  it('should observe the element when available', () => {
    const elementMock = document.createElement('div')
    renderHook(() => useDimension({ current: elementMock }))
    expect(resizeObserverMock.observe).toHaveBeenCalledWith(elementMock)
  })

  it('should update size when ResizeObserver calls back', () => {
    const elementMock = document.createElement('div')
    const { result } = renderHook(() => useDimension({ current: elementMock }))

    act(() => {
      const [[callback]] = (ResizeObserver as any).mock.calls
      callback([
        {
          contentRect: { width: 100, height: 50 },
        },
      ])
    })

    expect(result.current).toEqual({ width: 100, height: 50 })
  })

  it('should disconnect ResizeObserver on unmount', () => {
    const { unmount } = renderHook(() => useDimension({ current: document.createElement('div') }))
    unmount()
    expect(resizeObserverMock.disconnect).toHaveBeenCalled()
  })

  it('should handle multiple resize events', () => {
    const elementMock = document.createElement('div')
    const { result } = renderHook(() => useDimension({ current: elementMock }))

    act(() => {
      const [[callback]] = (ResizeObserver as any).mock.calls
      callback([{ contentRect: { width: 100, height: 50 } }])
    })

    expect(result.current).toEqual({ width: 100, height: 50 })

    act(() => {
      const [[callback]] = (ResizeObserver as any).mock.calls
      callback([{ contentRect: { width: 200, height: 100 } }])
    })

    expect(result.current).toEqual({ width: 200, height: 100 })
  })

  it('should work with a component', () => {
    const TestComponent = () => {
      const ref = React.useRef(null)
      const size = useDimension(ref)
      return <div ref={ref} data-testid="test-element">{`${size.width}x${size.height}`}</div>
    }

    const { getByTestId } = render(<TestComponent />)
    const element = getByTestId('test-element')

    act(() => {
      const [[callback]] = (ResizeObserver as any).mock.calls
      callback([{ contentRect: { width: 300, height: 150 } }])
    })

    expect(element.textContent).toBe('300x150')
  })
})
