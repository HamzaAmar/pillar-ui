import { renderHook, act } from '@testing-library/react'
import { useCheckboxGroup } from './useCheckboxGroup'
import { test, describe, expect } from 'vitest'

describe('useCheckboxGroup custom hook', () => {
  test('should initialize with the correct initial state', () => {
    const initialCheckedState = [true, false, true]
    const { result } = renderHook(() => useCheckboxGroup(initialCheckedState))

    expect(result.current.checkedItems).toEqual(initialCheckedState)
    expect(result.current.isIndeterminate).toBe(true)
    expect(result.current.isAllChecked).toBe(false)
  })

  test('should toggle all items when handleToggleAll is called', () => {
    const initialCheckedState = [true, false, true]
    const { result } = renderHook(() => useCheckboxGroup(initialCheckedState))

    act(() => {
      result.current.handleToggleAll({ target: { checked: true } } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.checkedItems).toEqual([true, true, true])
    expect(result.current.isIndeterminate).toBe(false)
    expect(result.current.isAllChecked).toBe(true)

    act(() => {
      result.current.handleToggleAll({ target: { checked: false } } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.checkedItems).toEqual([false, false, false])
    expect(result.current.isIndeterminate).toBe(false)
    expect(result.current.isAllChecked).toBe(false)
  })

  test('should toggle a specific item when handleToggleItem is called', () => {
    const initialCheckedState = [true, false, true]
    const { result } = renderHook(() => useCheckboxGroup(initialCheckedState))

    act(() => {
      result.current.handleToggleItem(1)
    })

    expect(result.current.checkedItems).toEqual([true, true, true])

    act(() => {
      result.current.handleToggleItem(0)
    })

    expect(result.current.checkedItems).toEqual([false, true, true])
  })
})
