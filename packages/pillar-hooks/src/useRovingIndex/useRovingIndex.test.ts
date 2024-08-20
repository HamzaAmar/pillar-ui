import { renderHook, act } from '@testing-library/react'
import { useRovingIndex, getNextIndex, getPreviousIndex } from '.'
import { describe, expect, it, vi } from 'vitest'

describe('getPreviousIndex function tests', () => {
  // Test cases when loop is true
  describe('when loop is true', () => {
    it('should return the last index when current index is 0', () => {
      expect(getPreviousIndex(0, 5, true)).toBe(4)
    })

    it('should return the previous index when not at the beginning', () => {
      expect(getPreviousIndex(3, 5, true)).toBe(2)
    })

    it('should handle single item case', () => {
      expect(getPreviousIndex(0, 1, true)).toBe(0)
    })
  })

  // Test cases when loop is false
  describe('when loop is false', () => {
    it('should return 0 when current index is 0', () => {
      expect(getPreviousIndex(0, 5, false)).toBe(0)
    })

    it('should return the previous index when not at the beginning', () => {
      expect(getPreviousIndex(3, 5, false)).toBe(2)
    })

    it('should handle single item case', () => {
      expect(getPreviousIndex(0, 1, false)).toBe(0)
    })
  })
})

describe('getNextIndex function tests', () => {
  // Test cases when loop is true
  describe('when loop is true', () => {
    it('should return 0 when current index is at the last item', () => {
      expect(getNextIndex(4, 5, true)).toBe(0)
    })

    it('should return the next index when not at the end', () => {
      expect(getNextIndex(2, 5, true)).toBe(3)
    })

    it('should handle single item case', () => {
      expect(getNextIndex(0, 1, true)).toBe(0)
    })
  })

  // Test cases when loop is false
  describe('when loop is false', () => {
    it('should return the last index when current index is at the last item', () => {
      expect(getNextIndex(4, 5, false)).toBe(4)
    })

    it('should return the next index when not at the end', () => {
      expect(getNextIndex(2, 5, false)).toBe(3)
    })

    it('should handle single item case', () => {
      expect(getNextIndex(0, 1, false)).toBe(0)
    })
  })

  // Edge cases
})

// Mock the useDirection hook
// vi.mock('../useDirection', () => ({
//   useDirection: () => ({ isLtr: true }),
// }))

// describe('useRovingIndex hook tests', () => {
//   it('should initialize with default values', () => {
//     const { result } = renderHook(() => useRovingIndex(5))
//     expect(result.current.focusedIndex).toBe(0)
//   })

//   it('should initialize with custom   index', () => {
//     const { result } = renderHook(() => useRovingIndex(5, { defaultIndex: 2 }))
//     expect(result.current.focusedIndex).toBe(2)
//   })

//   it('should throw error for invalid itemCount', () => {
//     expect(() => renderHook(() => useRovingIndex(0))).toThrow('useRovingIndex: itemCount must be a positive number.')
//   })

//   it('should throw error for negative defaultIndex', () => {
//     expect(() => renderHook(() => useRovingIndex(5, { defaultIndex: -1 }))).toThrow(
//       'useRovingIndex: defaultIndex must be a non-negative number.'
//     )
//   })

//   it('should throw error for out of range defaultIndex', () => {
//     expect(() => renderHook(() => useRovingIndex(5, { defaultIndex: 5 }))).toThrow(
//       'useRovingIndex: defaultIndex is out of range.'
//     )
//   })

//   it('should update focusedIndex when handleIndexChange is called', () => {
//     const { result } = renderHook(() => useRovingIndex(5))
//     act(() => {
//       result.current.handleIndexChange(3)
//     })
//     expect(result.current.focusedIndex).toBe(3)
//   })

//   it('should handle arrow keys in both directions', () => {
//     const { result } = renderHook(() => useRovingIndex(5))

//     act(() => {
//       result.current.handleKeyEvent({ key: 'ArrowRight', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(1)

//     act(() => {
//       result.current.handleKeyEvent({ key: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(2)

//     act(() => {
//       result.current.handleKeyEvent({ key: 'ArrowLeft', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(1)

//     act(() => {
//       result.current.handleKeyEvent({ key: 'ArrowUp', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(0)
//   })

//   it('should loop when reaching the end (loop = true)', () => {
//     const { result } = renderHook(() => useRovingIndex(3, { loop: true }))

//     act(() => {
//       result.current.handleKeyEvent({ key: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//       result.current.handleKeyEvent({ key: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//       result.current.handleKeyEvent({ key: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(0)
//   })

//   it('should not loop when reaching the end (loop = false)', () => {
//     const { result } = renderHook(() => useRovingIndex(3, { loop: false }))

//     act(() => {
//       result.current.handleKeyEvent({ key: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//       result.current.handleKeyEvent({ key: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//       result.current.handleKeyEvent({ key: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(2)
//   })

//   it('should handle horizontal direction only', () => {
//     const { result } = renderHook(() => useRovingIndex(3, { direction: 'horizontal' }))

//     act(() => {
//       result.current.handleKeyEvent({ key: 'ArrowRight', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(1)

//     act(() => {
//       result.current.handleKeyEvent({ key: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(1) // Should not change
//   })

//   it('should handle vertical direction only', () => {
//     const { result } = renderHook(() => useRovingIndex(3, { direction: 'vertical' }))

//     act(() => {
//       result.current.handleKeyEvent({ key: 'ArrowDown', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(1)

//     act(() => {
//       result.current.handleKeyEvent({ key: 'ArrowRight', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(1) // Should not change
//   })

//   it('should ignore non-arrow keys', () => {
//     const { result } = renderHook(() => useRovingIndex(3))

//     act(() => {
//       result.current.handleKeyEvent({ key: 'Enter', preventDefault: vi.fn() } as unknown as KeyboardEvent)
//     })
//     expect(result.current.focusedIndex).toBe(0) // Should not change
//   })
// })
