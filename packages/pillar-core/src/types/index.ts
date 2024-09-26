type CommonSize = '1' | '2' | '3' | '4' | '5' | '6' | undefined

type Size = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

/**
 * Represents the color of a component.
 *
 * @typedef {string} Color
 * @property {Color} i - Info color (for informational messages)
 * @property {Color} d - Danger color (for errors or alerts)
 * @property {Color} s - Success color (for positive actions or confirmations)
 * @property {Color} se - Secondary color (for less prominent elements)
 * @property {Color} w - Warning color (for cautionary messages)
 * @property {Color} p - Primary color (for main actions or branding)
 * @property {Color} b - Background color (for backgrounds or containers)
 * @property {Color} o - Opacity color (for Transparency element)
 */
type Color = 'i' | 'd' | 's' | 'se' | 'w' | 'p' | 'b' | 'o' | undefined

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

// TODO: Add jsdoc to this types
type CornerHand = 'h-1' | 'h-2' | 'h-3' | 'h-4' | 'h-5' | 'h-6'
type CornerBlob = 'b-1' | 'b-2' | 'b-3' | 'b-4' | 'b-5'

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

type Width = CharWidth | '25' | '50' | '75' | '100' | 'fit' | '24px' | '48px' | '96px' | '192px' | '384px' | 'screen'

type Height = '25' | '50' | '75' | '100' | 'fit' | '24px' | '48px' | '96px' | '192px' | '384px' | 'h-screen'

export type {
  CharWidth,
  Width,
  Height,
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
