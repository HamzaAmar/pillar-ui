import { renderHook, act } from '@testing-library/react'
import { useArray } from '.'
import { test, describe, expect } from 'vitest'

describe('useArray custom hook', () => {
  test('manipulating array of values', () => {
    const initialValue = ['hamza', 'miloud', 'amar']
    const { result } = renderHook(() => useArray(initialValue))

    // const { list, isEmpty, first, last, hasElement, addElement, removeElement, clear } = result.current

    expect(result.current.list).toStrictEqual(initialValue)
    expect(result.current.isEmpty).toBe(false)
    expect(result.current.first).toBe('hamza')
    expect(result.current.last).toBe('amar')
    expect(result.current.hasElement('miloud')).toBe(true)

    act(() => {
      result.current.addElement('developer', 'last')
    })
    expect(result.current.list).toStrictEqual([...initialValue, 'developer'])

    act(() => {
      result.current.removeElement('last')
    })

    expect(result.current.list).toStrictEqual(initialValue)

    act(() => {
      result.current.removeElement('first')
    })

    expect(result.current.list).toStrictEqual(['miloud', 'amar'])

    act(() => {
      result.current.clear()
    })

    expect(result.current.list).toStrictEqual([])
    expect(result.current.isEmpty).toStrictEqual(true)
  })

  test('manipulating array of objects', () => {
    const initialValue = [
      { id: 1, name: 'hamza' },
      { id: 2, name: 'miloud' },
      { id: 3, name: 'amar' },
    ]
    const { result } = renderHook(() => useArray(initialValue))

    expect(result.current.list).toStrictEqual(initialValue)
    expect(result.current.isEmpty).toBe(false)
    expect(result.current.first).toStrictEqual({ id: 1, name: 'hamza' })
    expect(result.current.last).toStrictEqual({ id: 3, name: 'amar' })
    expect(result.current.hasElement((item) => item.id === 2)).toBe(true)

    act(() => {
      result.current.addElement({ id: 4, name: 'developer' }, 'last')
    })

    expect(result.current.list).toStrictEqual([...initialValue, { id: 4, name: 'developer' }])

    act(() => {
      result.current.removeElement(1)
    })

    expect(result.current.list).toStrictEqual([
      { id: 1, name: 'hamza' },
      { id: 3, name: 'amar' },
      { id: 4, name: 'developer' },
    ])

    act(() => {
      result.current.addElement({ id: 5, name: 'frontend' }, 2)
    })

    expect(result.current.list).toStrictEqual([
      { id: 1, name: 'hamza' },
      { id: 3, name: 'amar' },
      { id: 5, name: 'frontend' },
      { id: 4, name: 'developer' },
    ])
  })

  test('Test For empty Array', () => {
    const { result } = renderHook(() => useArray<{ id: number; name: string }>([]))

    expect(result.current.list).toStrictEqual([])
    expect(result.current.isEmpty).toBe(true)
    expect(result.current.first).toStrictEqual(undefined)
    expect(result.current.last).toStrictEqual(undefined)
    expect(result.current.hasElement((item) => item.id === 2)).toBe(false)

    act(() => {
      result.current.addElement({ id: 4, name: 'developer' }, 'last')
    })

    expect(result.current.list).toStrictEqual([{ id: 4, name: 'developer' }])

    act(() => {
      result.current.removeElement(1)
    })

    expect(result.current.list).toStrictEqual([])

    act(() => {
      result.current.addElement({ id: 5, name: 'frontend' }, 2)
    })

    expect(result.current.list).toStrictEqual([{ id: 5, name: 'frontend' }])
  })
})
