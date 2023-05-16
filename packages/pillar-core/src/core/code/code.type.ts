import type { ReactNode } from 'react'
import type { Color, Size, Corner } from '../../types'

export interface CodeProps {
  children: ReactNode
  color?: Color
  size?: Size
  corner?: Omit<Corner, 'circle'>
}
