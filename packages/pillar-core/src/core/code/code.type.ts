import type { ReactNode } from 'react'
import type { Color, Size, Corner, Transform, Variant } from '../../types'

export interface CodeProps {
  children: ReactNode
  color?: Color
  size?: Size
  corner?: Omit<Corner, 'circle'>
  transform?: Transform
  variant?: Variant
}
