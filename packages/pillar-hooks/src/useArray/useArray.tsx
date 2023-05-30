import { useState } from 'react'
import { addToArray, removeFromArray } from '@pillar/utils'
import type { Position } from '@pillar/utils'

/**
 * Custom hook for managing an array state with common operations.
 * @template T - Type of array elements.
 * @param {T[]} [initialValue=[]] - Initial value for the array.
 * @returns {{
 *   list: T[],
 *   first: T,
 *   last: T,
 *   isEmpty: boolean,
 *   getElementIndex: (element: T, compareFn?: (a: T) => boolean) => number,
 *   hasElement: (element: T | ((value: T) => boolean)) => boolean,
 *   addElement: (element: T, position: import("@pillar/utils").Position) => void,
 *   removeElement: (position: import("@pillar/utils").Position) => void,
 *   clear: () => void,
 *   setList: React.Dispatch<React.SetStateAction<T[]>>
 * }}
 */

export const useArray = <T = unknown,>(initialValue: T[] = []) => {
  const [list, setList] = useState<T[]>(initialValue)

  const isEmpty = list.length === 0
  const first = list[0]
  const last = list.at(-1)

  /**
   * Checks if the array contains the specified element.
   * @param {T | ((value: T) => boolean)} element - The element or a callback function for comparison.
   * @returns {boolean} - `true` if the element is found, otherwise `false`.
   */
  function hasElement(element: T | ((value: T) => boolean)) {
    if (typeof element === 'function') {
      return list.some(element as (value: T) => boolean)
    }
    return list.includes(element)
  }

  /**
   * Clears the array by setting it to an empty array.
   */
  const clear = () => setList([])

  const getElementIndex = (element: T, compareFn: (a: T) => boolean = (item) => item === element): number => {
    return list.findIndex(compareFn)
  }

  /**
   * Adds an element to the array at the specified position.
   * @param {T} element - The element to add.
   * @param {import("@pillar/utils").Position} position - The position to add the element ('first' or 'last' | index: number).
   */
  const addElement = (element: T, position: Position) => {
    const lists = addToArray(list, element, position)
    setList(lists)
  }

  /**
   * Removes an element from the array at the specified position.
   * @param {import("@pillar/utils").Position} position - The position to remove the element ('first' or 'last'  | index: number).
   */
  const removeElement = (position: Position) => {
    const lists = removeFromArray(list, position)
    setList(lists)
  }

  return { list, first, last, isEmpty, getElementIndex, hasElement, removeElement, addElement, clear, setList }
}
