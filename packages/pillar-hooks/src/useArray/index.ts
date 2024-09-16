import { useState } from 'react'
type Position = 'first' | 'last' | number

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
 *   arr: T[],
 *   first: T | undefined,
 *   last: T | undefined,
 *   isEmpty: boolean,
 *   getIndex: (element: T, compareFn?: (a: T) => boolean) => number,
 *   hasElement: (element: T | ((value: T) => boolean)) => boolean,
 *   remove: (position: Position) => void,
 *   add: (element: T, position: Position) => void,
 *   clear: () => void,
 *   setArr: React.Dispatch<React.SetStateAction<T[]>>
 * }}
 *   An object containing the array state, utility functions, and setters.
 *   - **arr**: The current array state.
 *   - **first**: The first element in the array.
 *   - **last**: The last element in the array.
 *   - **isEmpty**: A boolean indicating whether the array is empty.
 *   - **getIndex**: A function to get the index of a specified element in the array.
 *   - **hasElement**: A function to check if the array contains a specific element.
 *   - **remove**: A function to remove an element from the array at the specified position.
 *   - **add**: A function to add an element to the array at the specified position.
 *   - **clear**: A function to clear the array by setting it to an empty array.
 *   - **setArr**: A setter function to update the array state.
 *
 * @example
 * // Example usage in a functional component:
 * function ArrayComponent() {
 *   const { arr, first, last, isEmpty, getIndex, hasElement, remove, add, clear } = useArray([1, 2, 3]);
 *
 *   return (
 *     <div>
 *       <p>Array: {arr.join(', ')}</p>
 *       <p>First Element: {first}</p>
 *       <p>Last Element: {last}</p>
 *       <p>Is Empty: {isEmpty ? 'Yes' : 'No'}</p>
 *       <p>Index of 2: {getIndex(2)}</p>
 *       <p>Has Element 3: {hasElement(3) ? 'Yes' : 'No'}</p>
 *       <button onClick={() => remove('first')}>Remove First Element</button>
 *       <button onClick={() => add(4, 'last')}>Add 4 at Last</button>
 *       <button onClick={clear}>Clear Array</button>
 *     </div>
 *   );
 * }
 */

export const useArray = <T = unknown>(initialValue: T[] = []) => {
  const [arr, setArr] = useState<T[]>(initialValue)

  const isEmpty = arr.length === 0
  const first = arr[0]
  const last = arr.at(-1)

  /**
   * Checks if the array contains the specified element.
   * @param {T | ((value: T) => boolean)} element - The element or a callback function for comparison.
   * @returns {boolean} - `true` if the element is found, otherwise `false`.
   */

  const has = (element: T | ((value: T) => boolean)) =>
    typeof element === 'function' ? arr.some(element as (value: T) => boolean) : arr.includes(element)

  /**
   * Clears the array by setting it to an empty array.
   */
  const clear = () => setArr([])

  /**
   * Gets the index of the specified element in the array.
   * @param {T | ((value: T) => boolean)} element - The element to search for or a callback function for comparison.
   * @param {(item: T) => boolean} compareFn - The callback function to compare the element with the elements in the array.
   * @returns {number} - The index of the element if found, otherwise -1.
   */
  const getIndex = (element: T, compareFn: (item: T) => boolean = (item) => item === element) =>
    arr.findIndex(compareFn)

  /**
   * Adds an element to the array at the specified position.
   * @param {T} element - The element to add.
   * @param {import("@pillar-ui/utils").Position} position - The position to add the element ('first' or 'last' | index: number).
   */

  const add = (element: T, position: Position) => {
    const index = position === 'first' ? 0 : position === 'last' ? arr.length : Math.min(position as number, arr.length)
    setArr([...arr.slice(0, index), element, ...arr.slice(index)])
  }

  /**
   * Removes an element from the array at the specified position.
   * @param {import("@pillar-ui/utils").Position} position - The position to remove the element ('first' or 'last'  | index: number).
   */
  const remove = (position: Position) => {
    const index = position === 'first' ? 0 : position === 'last' ? arr.length - 1 : Math.min(position, arr.length - 1)
    setArr([...arr.slice(0, index), ...arr.slice(index + 1)])
  }

  return { arr, first, last, isEmpty, getIndex, has, remove, add, clear, setArr }
}
