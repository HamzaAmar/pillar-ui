// import { renderHook } from '@testing-library/react'
// import { useRovingIndex } from './useRovingIndex'
// import { test, describe, expect, vi } from 'vitest'

// describe('useRovingIndex custom hook', () => {
//   test('should update the focused index correctly on keyboard events', () => {
//     const itemCount = 5
//     const options = { loop: true, defaultIndex: 0, direction: 'both' }
//     const { result } = renderHook(() => useRovingIndex(itemCount, options))

//     expect(result.current.focusedIndex).toBe(0) // Initial focused index is 0

//     // Simulate ArrowDown key event
//     result.current.handleKeyEvent({ key: 'ArrowDown', preventDefault: vi.fn() })

//     expect(result.current.focusedIndex).toBe(1) // Focused index is updated to 1

//     // Simulate ArrowRight key event
//     result.current.handleKeyEvent({ key: 'ArrowRight', preventDefault: vi.fn() })

//     expect(result.current.focusedIndex).toBe(2) // Focused index is updated to 2

//     // Simulate ArrowUp key event
//     result.current.handleKeyEvent({ key: 'ArrowUp', preventDefault: vi.fn() })

//     expect(result.current.focusedIndex).toBe(1) // Focused index is updated to 1

//     // Simulate ArrowLeft key event
//     result.current.handleKeyEvent({ key: 'ArrowLeft', preventDefault: vi.fn() })

//     expect(result.current.focusedIndex).toBe(0) // Focused index is updated to 0
//   })
// })
