import { act, renderHook } from '@testing-library/react'
import { useRef } from 'react'
import { vi } from 'vitest'
import { useComposedRefs } from '.'

describe('useComposedRefs', () => {
  it('should handle object refs correctly within a hook', () => {
    const { result } = renderHook(() => {
      const ref1 = useRef<HTMLInputElement>(null)
      return useComposedRefs(ref1)
    })

    act(() => {
      const dummyElement = document.createElement('input')
      result.current(dummyElement)
    })

    expect(result.current).toBeInstanceOf(Function)
  })

  it('should handle function refs correctly within a hook', () => {
    const refCallback = vi.fn()

    const { result } = renderHook(() => useComposedRefs(refCallback))

    act(() => {
      const dummyElement = document.createElement('input')
      result.current(dummyElement)
    })

    expect(refCallback).toHaveBeenCalledWith(expect.any(HTMLElement))
  })
})
