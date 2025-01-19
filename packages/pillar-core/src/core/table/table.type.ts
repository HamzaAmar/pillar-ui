import type { ReactNode, TableHTMLAttributes } from 'react'
import type { Color, Size } from '../../types'

type Variant = 'default' | 'striped' | 'soft' | 'head-color'

// type Border = "none" | 'soft';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  variant?: Variant
  color?: Color
  showBorder?: boolean
  size?: Size
  children: ReactNode
}
