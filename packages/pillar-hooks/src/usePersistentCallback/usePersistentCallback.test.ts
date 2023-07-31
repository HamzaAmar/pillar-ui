import { renderHook } from '@testing-library/react'
import { usePersistentCallback } from './usePersistentCallback'
import { test, expect, describe } from 'vitest'

describe('usePersistentCallback Test', () => {
  test('returns memoized callback function', async () => {
    let callbackFunction = () => 'Initial callback'
    const { result, rerender } = renderHook(() => usePersistentCallback(callbackFunction))

    const initial = result.current
    rerender()

    expect(result.current).toEqual(initial)
  })

  // test('returns new function when callback changes', async () => {
  //   let callbackFunction = () => {
  //     console.log
  //   }
  //   const { result, rerender } = renderHook((cb) => usePersistentCallback(cb), { initialProps: callbackFunction })

  //   const initial = result.current

  //   rerender(() => 'Updated callback')

  //   expect(result.current).not.toEqual(initial)
  // })
})
