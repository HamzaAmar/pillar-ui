/**
 * Checks if a number is within a specified range (inclusive).
 * @param {object} params - The parameters for the range check.
 * @param {number} params.value - The number to check.
 * @param {number} params.min - The minimum value of the range.
 * @param {number} params.max - The maximum value of the range.
 * @returns {boolean} Returns true if the number is within the range, false otherwise.
 * @example
 * isInRange({ num: 5, min: 1, max: 10 }); // true
 * isInRange({ num: 15, min: 1, max: 10 }); // false
 */

interface Range {
  value: number
  min: number
  max: number
}

export const isInRange = ({ value, min, max }: Range) => value >= min && value <= max
