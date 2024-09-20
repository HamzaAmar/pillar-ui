import type { ReactNode } from 'react'
import type { Color, Corner, Variant, Size } from '../../types'

export interface AlertProps {
  color?: Color
  size?: Size
  corner?: Omit<Corner, 'circle'>
  title?: string
  message?: string
  variant?: Omit<Variant, 'transparent'>
  inline?: boolean
  icon?: ReactNode
  closable?: boolean
  visible?: boolean
  defaultVisible?: boolean
  onClose?: () => void
}
