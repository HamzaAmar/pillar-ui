type SharedSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type Size = '3xs' | '2xs' | SharedSize | '2xl' | '3xl'

/**
 * Represents the color of a component.
 * @typedef {Size} Size
 */

type Color =
  | 'red'
  | 'danger'
  | 'green'
  | 'success'
  | 'info'
  | 'indigo'
  | 'orange'
  | 'warning'
  | 'indigo'
  | 'purple'
  | 'violet'
  | 'brown'
  | 'primary'
  | 'slate'

/**
 * Represents the color of a component.
 * @typedef {Color} Color
 */

/* The Difference Between circle and full circle use 50% and the other use 1000px */
type Corner = 'sharp' | SharedSize | 'circle' | 'full'

/**
 * Represents the color of a component.
 * @typedef {Corner} Corner
 */

type Variant = 'solid' | 'outline' | 'soft' | 'text'

/**
 * Represents the color of a component.
 * @typedef {Variant} Variant
 */

export type { Color, Size, Corner, Variant }
