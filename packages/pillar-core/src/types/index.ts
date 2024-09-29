type SharedSize = '1' | '2' | '3' | '4' | '5' | undefined

type Size = SharedSize | '6' | '7' | '8' | '9'

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
type Color = 'i' | 'd' | 'su' | 'se' | 'w' | 'p' | 'b' | 'o' | undefined

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
type CornerHand = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type CornerBlob = 'b1' | 'b2' | 'b3' | 'b4' | 'b5'

type Corner = '0' | SharedSize | 'circle' | 'full'

/**
 * Represents the color of a component.
 * @typedef {Corner} Corner
 */

type Variant = 'solid' | 'outline' | 'soft' | 'text' | 'mixed' | undefined

/**
 * Represents the color of a component.
 * @typedef {Variant} Variant
 */

type Orientation = 'horizontal' | 'vertical' | undefined

/**
 * Represents the color of a component.
 * @typedef {Direction} Direction
 */

type Transform = 'uppercase' | 'lowercase' | 'capitalize' | 'first-letter-only'

type Height = '25' | '50' | '75' | '100' | 'fit' | '24p' | '48p' | '96p' | '192p' | '384p' | 'screen'

type CharWidth = '25c' | '30c' | '45c' | '60c' | '75c' | '90c'

type Width = CharWidth | Height

type Items = 'center' | 'end' | 'start'
type Justify = 'start' | 'around' | 'between' | 'evenly' | 'end' | 'center'
type Direction = 'col' | 'row'

export type {
  CharWidth,
  Width,
  Height,
  Color,
  Size,
  Corner,
  Variant,
  Orientation,
  Gradient,
  Transform,
  SharedSize,
  CornerHand,
  CornerBlob,
  Items,
  Justify,
  Direction,
}
