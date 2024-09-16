/**
 * Clamps a value between a minimum and maximum range.
 * @param {number} value - The value to clamp.
 * @param {[number, number]} range - The minimum and maximum values defining the range.
 * @returns {number} - The clamped value.
 */
export function clamp(value: number, [min, max]: [number, number]): number {
  return Math.min(max, Math.max(min, value))
}
