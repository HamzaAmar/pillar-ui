import type { ReactNode } from 'react'
import type { CharWidth, Color, SharedSize, Size, Transform } from '../../types'

type FontStyle = 'italic' | 'oblique'
type Align = 'start' | 'center' | 'end'
type Decoration = 'through' | 'under' | 'over'
type Leading = SharedSize
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
