import { renderHook } from '@testing-library/react'
import { useDebounce } from '.'
import { it, describe, expect, vi } from 'vitest'

describe('useDebounce custom hook', () => {
  it('test valid arguments', () => {
    const mockFunc = vi.fn()
    const delay = 150

    const { result } = renderHook(() => useDebounce(mockFunc, delay))
    expect(result.current).toBeDefined()
  })
})
