type CommonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined

type Size = '3xs' | '2xs' | CommonSize | '2xl' | '3xl'

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

type CornerHand = 'hand-1' | 'hand-2' | 'hand-3' | 'hand-4' | 'hand-5' | 'hand-6'
type CornerBlob = 'blob-1' | 'blob-2' | 'blob-3' | 'blob-4' | 'blob-5'

type Corner = 'sharp' | CommonSize | 'circle' | 'full' | undefined

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

type CharWidth = '25-char' | '30-char' | '45-char' | '60-char' | '75-char' | '90-char'

type Width = CharWidth | 'half' | 'one-third' | 'full' | 'fit-content'

export type {
  CharWidth,
  Width,
  Color,
  Size,
  Corner,
  Variant,
  Direction,
  Gradient,
  Transform,
  CommonSize,
  CornerHand,
  CornerBlob,
}
