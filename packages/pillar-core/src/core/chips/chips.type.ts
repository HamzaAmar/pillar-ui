import type { ReactNode } from 'react'
import type { Color, Corner, Size, Variant, Transform } from '../../types'

export interface ChipsProps {
  variant?: Variant
  size?: Omit<Size, '1' | '3xl'>
  color?: Color
  corner?: Corner
  children: ReactNode
  transform?: Transform
  highContrast?: boolean
}
