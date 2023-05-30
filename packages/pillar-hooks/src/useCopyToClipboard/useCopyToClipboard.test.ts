import { renderHook, act } from '@testing-library/react'
import { useCopyToClipboard } from './useCopyToClipboard'
import { test, describe, expect, vi } from 'vitest'

describe('useCopyToClipboard custom hook', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn(),
      },
      writable: true,
    })
  })

  test('should initialize with default values', () => {
    const { result } = renderHook(() => useCopyToClipboard())

    expect(result.current.text).toBe(null)
    expect(result.current.copied).toBe(false)
  })

  test('should copy text to clipboard and update state', async () => {
    const { result } = renderHook(() => useCopyToClipboard())

    expect(result.current.text).toBe(null)
    expect(result.current.copied).toBe(false)

    await act(async () => {
      await result.current.copy('Hello, world!')
    })
    expect(result.current.text).toEqual('Hello, world!')
    expect(result.current.copied).toBe(true)
  })

  test('should reset text and copied state after timeout', async () => {
    const { result } = renderHook(() => useCopyToClipboard(300))

    await act(async () => {
      await result.current.copy('Hello, world!')
    })

    expect(result.current.text).toEqual('Hello, world!')
    expect(result.current.copied).toBe(true)

    await new Promise((resolve) => setTimeout(resolve, 400))

    expect(result.current.text).toBe(null)
    expect(result.current.copied).toBe(false)
  })
})
