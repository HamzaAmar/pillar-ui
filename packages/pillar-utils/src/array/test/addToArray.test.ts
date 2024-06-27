import { addToArray } from '..'
import { describe, test, expect } from 'vitest'

describe('addToArray function', () => {
  test('should add an element at the first position', () => {
    const list = [2, 3, 4]
    const element = 1
    const result = addToArray(list, element, 'first')
    expect(result).toStrictEqual([1, 2, 3, 4])
  })

  test('should add an element at the last position', () => {
    const list = [1, 2, 3]
    const element = 4
    const result = addToArray(list, element, 'last')
    expect(result).toStrictEqual([1, 2, 3, 4])
  })

  test('should add an element at a specific position', () => {
    const list = ['apple', 'banana', 'cherry']
    const element = 'orange'
    const result = addToArray(list, element, 1)
    expect(result).toStrictEqual(['apple', 'orange', 'banana', 'cherry'])
  })

  test('should add an element beyond the last position', () => {
    const list = ['danger', 'success']
    const element = 'blue'
    const result = addToArray(list, element, 5)
    expect(result).toStrictEqual(['danger', 'success', 'blue'])
  })

  test('should add an element to an empty array', () => {
    const list: string[] = []
    const element1 = 'item1'
    const result = addToArray(list, element1, 'first')
    expect(result).toStrictEqual([element1])
    const element2 = 'item3'
    const result1 = addToArray(list, element2, 'last')
    expect(result1).toStrictEqual([element2])
    const element3 = 'item2'
    const result2 = addToArray(list, element3, 1)
    expect(result2).toStrictEqual([element3])
  })
})
