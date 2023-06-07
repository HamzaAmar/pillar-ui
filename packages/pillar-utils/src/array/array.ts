import type { Position } from './array.type'

/**
 * Generates an array of numbers within a specified range.
 * @param {number} start - The start value of the range.
 * @param {number} end - The end value of the range.
 * @returns {number[]} - An array of numbers within the specified range.
 */
export function range(start: number, end: number) {
  const [min, max] = [Math.round(start), Math.round(end)]
  const length = Math.abs(max - min) + 1
  const step = min > max ? -1 : 1

  return Array.from({ length }, (_, index) => min + index * step)
}

/**
 * Adds an element to the specified position in the array.
 * @template T - The type of array elements.
 * @param {T[]} list - The original array.
 * @param {T} element - The element to add.
 * @param {Position} position - The position to insert the element ('first', 'last', or index).
 * @returns {T[]} - The updated array with the element added.
 */
export const addToArray = <T = any>(list: T[], element: T, position: Position) => {
  const updatedList = [...list]
  const arrayLength = updatedList.length
  // Ensure the index is within the valid range by taking the minimum
  // value between the position and the length of the list. This prevents
  // the index from going beyond the bounds of the array.
  const index = position === 'first' ? 0 : position === 'last' ? arrayLength : Math.min(position, arrayLength)
  updatedList.splice(index, 0, element)
  return updatedList
}

/**
 * Removes an element from the specified position in the array.
 * @template T - The type of array elements.
 * @param {T[]} list - The original array.
 * @param {Position} position - The position to remove the element from ('first', 'last', or index).
 * @returns {T[]} - The updated array with the element removed.
 */

export const removeFromArray = <T = any>(list: T[], position: Position) => {
  const updatedList = [...list]
  const arrayLength = list.length - 1
  const index = position === 'first' ? 0 : position === 'last' ? arrayLength : Math.min(position, arrayLength)
  updatedList.splice(index, 1)
  return updatedList
}

/**
 * Checks if two arrays are equal.
 * @template T - The type of array elements.
 * @param {T[]} arr1 - The first array.
 * @param {T[]} arr2 - The second array.
 * @returns {boolean} - Returns true if the arrays are equal, false otherwise.
 */
export function arraysEqual<T>(arr1: T[], arr2: T[]): boolean {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])
}
