import type { ReactElement, ReactNode } from 'react'
import type { Color, Corner, Size, Variant, Transform } from '../../types'

export interface ChipsProps {
  variant?: Variant
  size?: Omit<Size, '3xs' | '3xl'>
  color?: Color
  corner?: Corner
  children: ReactNode
  icon?: ReactElement
  iconPosition?: 'start' | 'end'
  transform?: Transform
}
