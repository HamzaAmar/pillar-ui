import type { ReactNode } from 'react'
import type { CharWidth, Color, Size } from '../../types'

type Contrast = 'low' | 'high'
type FontStyle = 'italic' | 'oblique'
type Align = 'start' | 'center' | 'end'
type Decoration = 'through' | 'under' | 'over'
type Leading = 'normal' | 'sm' | 'md' | 'lg'
type Transform = 'uppercase' | 'lowercase' | 'capitalize' | 'first-letter-only'
type Weight = 'thin' | 'extra-light' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black'

// interface TypographyBaseProps {
//   size?: Size
//   className?: string
//   align?: Align
//   transform?: Transform
//   children?: ReactNode
//   weight?: Weight
//   color?: Color
//   contrast?: Contrast
//   fontStyle?: FontStyle
//   decoration?: Decoration
//   leading?: Leading
//   truncate?: number
// }

export interface TypographyProps {
  size?: Size
  className?: string
  align?: Align
  transform?: Transform
  children?: ReactNode
  weight?: Weight
  color?: Color
  contrast?: Contrast
  fontStyle?: FontStyle
  decoration?: Decoration
  leading?: Leading
  truncate?: number
  width?: CharWidth
}

// interface MultiLineTypographyTruncate extends TypographyBaseProps {
//   truncate?: 'multiline'
//   numberLine: number
// }

// interface SingleLineTypographyTruncate extends TypographyBaseProps {
//   truncate?: 'singleline'
// }

// export type TypographyProps = MultiLineTypographyTruncate | SingleLineTypographyTruncate
