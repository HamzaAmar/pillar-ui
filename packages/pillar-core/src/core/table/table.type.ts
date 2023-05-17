import type { ReactNode, TableHTMLAttributes } from 'react'
import type { Color, Size } from '../../types'

type Variant = 'default' | 'striped' | 'soft' | 'head-color'
type Type = 'head' | 'body'
type Weight = 'thin' | 'extra-light' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black'

// type Border = "none" | 'soft';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  variant?: Variant
  color?: Color
  showBorder?: boolean
  size?: Size
  children: ReactNode
}

export interface TableColumnProps {
  weight?: Weight
}
export interface TableRowProps {
  children: ReactNode
  type?: Type
}
