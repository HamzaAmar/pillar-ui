type SharedSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type Size = '3xs' | '2xs' | SharedSize | '2xl' | '3xl'

/**
 * Represents the color of a component.
 * @typedef {Size} Size
 */

type Color = 'danger' | 'success' | 'secondary' | 'warning' | 'primary' | 'surface' | 'opacity'

/**
 * Represents the color of a component.
 * @typedef {Size} Size
 */

type Gradient = Color | 'mixed1' | 'mixed2' | 'mixed3' | 'mixed4'

/**
 * Represents the color of a component.
 * @typedef {Gradient} Gradient
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

type Direction = 'horizontal' | 'vertical'

/**
 * Represents the color of a component.
 * @typedef {Direction} Direction
 */

export type { Color, Size, Corner, Variant, Direction, Gradient }
