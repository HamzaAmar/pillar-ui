import type { ReactNode } from 'react'
import type { Color, Corner, Variant, Size } from '../../types'

export interface AlertProps {
  color?: Color
  size?: Size
  corner?: Corner
  title?: string
  message?: string
  variant?: Omit<Variant, 'transparent'>
  inline?: boolean
  icon?: ReactNode
  closable?: boolean
}
