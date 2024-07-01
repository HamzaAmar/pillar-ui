import { useState } from 'react'
import { addToArray, removeFromArray } from '@pillar-ui/utils'
import type { Position } from '@pillar-ui/utils'

/**
 * Represents the position to add or remove an element in the array.
 * @typedef {'first' | 'last' | number} Position
 */

/**
 * A custom React hook to manage an array state and provide array-related utility functions.
 *
 * @template T - The type of elements in the array.
 *
 * @param {T[]} initialValue - The initial array value (default is an empty array []).
 *
 * @returns {{
 *   list: T[],
 *   first: T | undefined,
 *   last: T | undefined,
 *   isEmpty: boolean,
 *   getElementIndex: (element: T, compareFn?: (a: T) => boolean) => number,
 *   hasElement: (element: T | ((value: T) => boolean)) => boolean,
 *   removeElement: (position: Position) => void,
 *   addElement: (element: T, position: Position) => void,
 *   clear: () => void,
 *   setList: React.Dispatch<React.SetStateAction<T[]>>
 * }}
 *   An object containing the array state, utility functions, and setters.
 *   - **list**: The current array state.
 *   - **first**: The first element in the array.
 *   - **last**: The last element in the array.
 *   - **isEmpty**: A boolean indicating whether the array is empty.
 *   - **getElementIndex**: A function to get the index of a specified element in the array.
 *   - **hasElement**: A function to check if the array contains a specific element.
 *   - **removeElement**: A function to remove an element from the array at the specified position.
 *   - **addElement**: A function to add an element to the array at the specified position.
 *   - **clear**: A function to clear the array by setting it to an empty array.
 *   - **setList**: A setter function to update the array state.
 *
 * @example
 * // Example usage in a functional component:
 * function ArrayComponent() {
 *   const { list, first, last, isEmpty, getElementIndex, hasElement, removeElement, addElement, clear } = useArray([1, 2, 3]);
 *
 *   return (
 *     <div>
 *       <p>Array: {list.join(', ')}</p>
 *       <p>First Element: {first}</p>
 *       <p>Last Element: {last}</p>
 *       <p>Is Empty: {isEmpty ? 'Yes' : 'No'}</p>
 *       <p>Index of 2: {getElementIndex(2)}</p>
 *       <p>Has Element 3: {hasElement(3) ? 'Yes' : 'No'}</p>
 *       <button onClick={() => removeElement('first')}>Remove First Element</button>
 *       <button onClick={() => addElement(4, 'last')}>Add 4 at Last</button>
 *       <button onClick={clear}>Clear Array</button>
 *     </div>
 *   );
 * }
 */

export const useArray = <T = unknown>(initialValue: T[] = []) => {
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
   * @param {import("@pillar-ui/utils").Position} position - The position to add the element ('first' or 'last' | index: number).
   */
  const addElement = (element: T, position: Position) => {
    const lists = addToArray(list, element, position)
    setList(lists)
  }

  /**
   * Removes an element from the array at the specified position.
   * @param {import("@pillar-ui/utils").Position} position - The position to remove the element ('first' or 'last'  | index: number).
   */
  const removeElement = (position: Position) => {
    const lists = removeFromArray(list, position)
    setList(lists)
  }

  return { list, first, last, isEmpty, getElementIndex, hasElement, removeElement, addElement, clear, setList }
}
