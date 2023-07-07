import { describe, test, expect, vi } from 'vitest'
import { composeRef } from '../composeRef'

describe('composeRef', () => {
  test('should update each ref', () => {
    const ref1 = {
      current: null as HTMLInputElement | null,
    }

    const ref2 = vi.fn()

    const ref3 = {
      current: null as HTMLInputElement | null,
    }

    const element = {} as HTMLInputElement

    const combinedRef = composeRef(ref1, ref2, ref3)
    combinedRef(element)

    expect(ref1.current).toBe(element)
    expect(ref2).toHaveBeenCalledWith(element)
    expect(ref3.current).toBe(element)
  })

  test('should handle null and undefined refs', () => {
    const ref1 = {
      current: null as HTMLInputElement | null,
    }

    const ref2 = undefined

    const ref3 = null

    const element = {} as HTMLInputElement

    const combinedRef = composeRef(ref1, ref2, ref3)
    combinedRef(element)

    expect(ref1.current).toBe(element)
  })
})
