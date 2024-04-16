type SharedSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined

type Size = '3xs' | '2xs' | SharedSize | '2xl' | '3xl'

/**
 * Represents the color of a component.
 * @typedef {Size} Size
 */

type Color = 'info' | 'danger' | 'success' | 'secondary' | 'warning' | 'primary' | 'surface' | 'opacity' | undefined

/**
 * Represents the color of a component.
 * @typedef {Size} Size
 */

type Gradient = Color | 'mixed1' | 'mixed2' | 'mixed3' | 'mixed4' | undefined

/**
 * Represents the color of a component.
 * @typedef {Gradient} Gradient
 */

/* The Difference Between circle and full circle use 50% and the other use 1000px */
type Corner = 'sharp' | SharedSize | 'circle' | 'full' | undefined

/**
 * Represents the color of a component.
 * @typedef {Corner} Corner
 */

type Variant = 'solid' | 'outline' | 'soft' | 'text' | 'mixed' | undefined

/**
 * Represents the color of a component.
 * @typedef {Variant} Variant
 */

type Direction = 'horizontal' | 'vertical' | undefined

/**
 * Represents the color of a component.
 * @typedef {Direction} Direction
 */

type Transform = 'uppercase' | 'lowercase' | 'capitalize' | 'first-letter-only'

export type { Color, Size, Corner, Variant, Direction, Gradient, Transform }
