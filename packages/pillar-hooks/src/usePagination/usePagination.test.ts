import { renderHook } from '@testing-library/react'
import { usePagination } from './usePagination'

describe('usePagination Test useCase', () => {
  test('returns correct range and currentStep when maxPerView > totalPages', () => {
    const totalPages = 10
    const currentPage = 1
    const maxPerView = 15

    const { result } = renderHook(() => usePagination({ totalPages, currentPage, maxPerView }))

    const { range, currentStep } = result.current

    expect(range).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(currentStep).toBe(1)
  })

  test('returns correct range and currentStep when currentStep < maxPerView', () => {
    const totalPages = 10
    const currentPage = 3
    const maxPerView = 5

    const { result } = renderHook(() => usePagination({ totalPages, currentPage, maxPerView }))

    const { range, currentStep } = result.current

    expect(range).toStrictEqual([1, 2, 3, 4, 5, '.', 10])
    expect(currentStep).toBe(3)
  })

  test('returns correct range and currentStep when currentStep > totalPages - maxPerView', () => {
    const totalPages = 10
    const currentPage = 8
    const maxPerView = 5

    const { result } = renderHook(() => usePagination({ totalPages, currentPage, maxPerView }))

    const { range, currentStep } = result.current

    expect(range).toStrictEqual([1, '.', 6, 7, 8, 9, 10])
    expect(currentStep).toBe(8)
  })

  test('returns correct range and currentStep for a general use case', () => {
    const totalPages = 10
    const currentPage = 5
    const maxPerView = 5

    const { result } = renderHook(() => usePagination({ totalPages, currentPage, maxPerView }))

    const { range, currentStep } = result.current

    expect(range).toStrictEqual([1, '.', 4, 5, 6, '.', 10])
    expect(currentStep).toBe(5)
  })
})
