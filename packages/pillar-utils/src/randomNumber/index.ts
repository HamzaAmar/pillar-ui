export interface RandomNumber {
  min?: number
  max: number
  rounded?: boolean
}

/**
 * Generates a random number within a specified range.
 * @param {{ min?: number, max: number, rounded?: boolean }} options - The options object.
 * @param {number} options.min - The minimum value of the range (inclusive). Default: 0.
 * @param {number} options.max - The maximum value of the range (exclusive).
 * @param {boolean} options.rounded - Whether to round the generated number to the nearest integer. Default: false.
 * @returns {number} - The generated random number.
 */
export const randomNumber = ({ min = 0, max, rounded = false }: RandomNumber) => {
  const randomNumber = Math.random() * (max - min) + min
  return rounded ? Math.floor(randomNumber) : randomNumber
}
