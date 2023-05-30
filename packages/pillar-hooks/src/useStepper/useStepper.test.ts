import { renderHook, act } from '@testing-library/react'
import { useStepper } from './useStepper'
import { test, describe, expect } from 'vitest'

describe('useStepper custom hook', () => {
  test('should initialize with the correct initial step', () => {
    const { result } = renderHook(() => useStepper(10, 1))

    expect(result.current.currentStep).toBe(1)
    expect(result.current.isFirst).toBe(true)
    expect(result.current.isLast).toBe(false)
  })

  test('should jump to the last step', () => {
    const { result } = renderHook(() => useStepper(10, 1))

    act(() => {
      result.current.jumpToLastStep()
    })

    expect(result.current.currentStep).toBe(10)
    expect(result.current.isFirst).toBe(false)
    expect(result.current.isLast).toBe(true)
  })

  test('should jump to the first step', () => {
    const { result } = renderHook(() => useStepper(10, 5))

    act(() => {
      result.current.jumpToFirstStep()
    })

    expect(result.current.currentStep).toBe(1)
    expect(result.current.isFirst).toBe(true)
    expect(result.current.isLast).toBe(false)
  })

  test('should jump to a specific step', () => {
    const { result } = renderHook(() => useStepper(10, 5))

    act(() => {
      result.current.jumpToStep(7)
    })

    expect(result.current.currentStep).toBe(7)
    expect(result.current.isFirst).toBe(false)
    expect(result.current.isLast).toBe(false)
  })

  test('should go to the next step', () => {
    const { result } = renderHook(() => useStepper(3, 1))

    act(() => {
      result.current.goToNextStep()
    })

    expect(result.current.currentStep).toBe(2)
  })

  test('should go to the previous step', () => {
    const { result } = renderHook(() => useStepper(3, 2))

    act(() => {
      result.current.goToPreviousStep()
    })

    expect(result.current.currentStep).toBe(1)
    expect(result.current.isFirst).toBe(true)
    expect(result.current.isLast).toBe(false)
  })

  test('should set isFirst and isLast correctly', () => {
    const { result } = renderHook(() => useStepper(10, 2))

    expect(result.current.isFirst).toBe(false)
    expect(result.current.isLast).toBe(false)

    act(() => {
      result.current.goToPreviousStep()
    })

    expect(result.current.isFirst).toBe(true)
    expect(result.current.isLast).toBe(false)

    act(() => {
      result.current.goToNextStep()
    })

    expect(result.current.isFirst).toBe(false)
    expect(result.current.isLast).toBe(false)

    act(() => {
      result.current.jumpToFirstStep()
    })

    expect(result.current.isFirst).toBe(true)
    expect(result.current.isLast).toBe(false)

    act(() => {
      result.current.jumpToLastStep()
    })

    expect(result.current.isFirst).toBe(false)
    expect(result.current.isLast).toBe(true)
  })
})
