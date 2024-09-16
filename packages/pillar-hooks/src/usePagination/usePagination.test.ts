import { renderHook } from '@testing-library/react'
import { usePagination } from '.'

describe('usePagination Test useCase', () => {
  test('returns correct range and step when perView > max', () => {
    const max = 10
    const initial = 1
    const perView = 15

    const { result } = renderHook(() => usePagination({ max, initial, perView }))

    const { range, step } = result.current

    expect(range).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(step).toBe(1)
  })

  test('returns correct range and step when step < perView', () => {
    const max = 10
    const initial = 3
    const perView = 5

    const { result } = renderHook(() => usePagination({ max, initial, perView }))

    const { range, step } = result.current

    expect(range).toStrictEqual([1, 2, 3, 4, 5, '.', 10])
    expect(step).toBe(3)
  })

  test('returns correct range and step when step > max - perView', () => {
    const max = 10
    const initial = 8
    const perView = 5

    const { result } = renderHook(() => usePagination({ max, initial, perView }))

    const { range, step } = result.current

    expect(range).toStrictEqual([1, '.', 6, 7, 8, 9, 10])
    expect(step).toBe(8)
  })

  test('returns correct range and step for a general use case', () => {
    const max = 10
    const initial = 5
    const perView = 5

    const { result } = renderHook(() => usePagination({ max, initial, perView }))

    const { range, step } = result.current

    expect(range).toStrictEqual([1, '.', 4, 5, 6, '.', 10])
    expect(step).toBe(5)
  })
})
