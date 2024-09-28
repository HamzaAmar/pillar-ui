import type { ReactNode } from 'react'
import type { CharWidth, Color, SharedSize, Size } from '../../types'

type FontStyle = 'italic' | 'oblique'
type Align = 'start' | 'center' | 'end'
type Decoration = 'through' | 'under' | 'over'
type Leading = 'normal' | 'sm' | 'md' | 'lg'
type Transform = 'uppercase' | 'lowercase' | 'capitalize' | 'first-letter-only'
type Weight = Size

export interface TypographyProps {
  size?: Size
  className?: string
  align?: Align
  transform?: Transform
  children?: ReactNode
  weight?: Weight
  color?: Color
  low?: boolean
  fontStyle?: FontStyle
  decoration?: Decoration
  leading?: Leading
  truncate?: SharedSize | '6'
  width?: CharWidth
  // variant?: 'text' | 'heading' | 'link'
}
