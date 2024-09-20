import type { ReactNode } from 'react'
import type { Color, Corner, Size } from '../../types'

export interface BlockquoteProps {
  color?: Color
  size?: Size
  corner?: Corner
  icon?: ReactNode
}
