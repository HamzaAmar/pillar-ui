import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useArray } from '.'

describe('useArray', () => {
  it('should initialize with an empty array by default', () => {
    const { result } = renderHook(() => useArray())
    expect(result.current.arr).toEqual([])
    expect(result.current.isEmpty).toBe(true)
    expect(result.current.first).toBeUndefined()
    expect(result.current.last).toBeUndefined()
  })

  it('should initialize with the provided initial value', () => {
    const initialValue = [1, 2, 3]
    const { result } = renderHook(() => useArray(initialValue))
    expect(result.current.arr).toEqual(initialValue)
    expect(result.current.isEmpty).toBe(false)
    expect(result.current.first).toBe(1)
    expect(result.current.last).toBe(3)
  })

  describe('Testing has In UseArray', () => {
    it('should check if the array contains a specific element', () => {
      const { result } = renderHook(() => useArray([1, 2, 3]))
      expect(result.current.has(2)).toBe(true)
      expect(result.current.has(4)).toBe(false)
    })

    it('should use a callback function for comparison', () => {
      const { result } = renderHook(() => useArray([{ id: 1 }, { id: 2 }]))
      expect(result.current.has((item) => item.id === 2)).toBe(true)
      expect(result.current.has((item) => item.id === 3)).toBe(false)
    })
  })

  describe('clear', () => {
    it('should clear the array', () => {
      const { result } = renderHook(() => useArray([1, 2, 3]))
      act(() => {
        result.current.clear()
      })
      expect(result.current.arr).toEqual([])
      expect(result.current.isEmpty).toBe(true)
    })
  })

  describe('getIndex', () => {
    it('should return the index of an element', () => {
      const { result } = renderHook(() => useArray([1, 2, 3]))
      expect(result.current.getIndex(2)).toBe(1)
      expect(result.current.getIndex(4)).toBe(-1)
    })

    it('should use a custom compare function', () => {
      const { result } = renderHook(() => useArray([{ id: 1 }, { id: 2 }, { id: 3 }]))
      expect(result.current.getIndex({ id: 1 }, (item) => item.id === 1)).toBe(0)
      expect(result.current.getIndex({ id: 3 }, (item) => item.id === 3)).toBe(2)
    })
  })

  describe('add', () => {
    it('should add an element to the beginning of the array', () => {
      const { result } = renderHook(() => useArray([2, 3]))
      act(() => {
        result.current.add(1, 'first')
      })
      expect(result.current.arr).toEqual([1, 2, 3])
    })

    it('should add an element to the end of the array', () => {
      const { result } = renderHook(() => useArray([1, 2]))
      act(() => {
        result.current.add(3, 'last')
      })
      expect(result.current.arr).toEqual([1, 2, 3])
    })

    it('should add an element at a specific index', () => {
      const { result } = renderHook(() => useArray([1, 3]))
      act(() => {
        result.current.add(2, 1)
      })
      expect(result.current.arr).toEqual([1, 2, 3])
    })
  })

  describe('remove', () => {
    it('should remove the first element from the array', () => {
      const { result } = renderHook(() => useArray([1, 2, 3]))
      act(() => {
        result.current.remove('first')
      })
      expect(result.current.arr).toEqual([2, 3])
    })

    it('should remove the last element from the array', () => {
      const { result } = renderHook(() => useArray([1, 2, 3]))
      act(() => {
        result.current.remove('last')
      })
      expect(result.current.arr).toEqual([1, 2])
    })

    it('should remove an element at a specific index', () => {
      const { result } = renderHook(() => useArray([1, 2, 3]))
      act(() => {
        result.current.remove(1)
      })
      expect(result.current.arr).toEqual([1, 3])
    })
  })

  describe('setArr', () => {
    it('should set the array to a new value', () => {
      const { result } = renderHook(() => useArray([1, 2, 3]))
      act(() => {
        result.current.setArr([4, 5, 6])
      })
      expect(result.current.arr).toEqual([4, 5, 6])
    })
  })

  // Edge cases and error handling
  describe('edge cases', () => {
    it('should handle empty array operations', () => {
      const { result } = renderHook(() => useArray())
      act(() => {
        expect(() => result.current.remove('first')).not.toThrow()
      })
      act(() => {
        expect(() => result.current.remove('last')).not.toThrow()
      })
      expect(result.current.getIndex(1)).toBe(-1)
    })

    //   it('should handle out of bounds index', () => {
    //     const { result } = renderHook(() => useArray([1]))
    //     act(() => {
    //       result.current.add(2, 5) // Index out of bounds
    //     })
    //     expect(result.current.arr).toEqual([1, 2]) // Should add to the end
    //   })

    //   it('should handle negative index', () => {
    //     const { result } = renderHook(() => useArray([1, 2, 3]))
    //     act(() => {
    //       result.current.remove(-1) // Negative index
    //     })
    //     expect(result.current.arr).toEqual([1, 2]) // Should remove the last element
    //   })
  })
})
