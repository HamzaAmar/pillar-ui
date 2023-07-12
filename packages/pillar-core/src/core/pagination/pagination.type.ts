import type { ReactNode } from 'react'
import type { Color, Corner, Size, Variant } from '../../types'

interface PaginationBase {
  color?: Color
  variant?: Variant
  corner?: Corner
  size?: Size
}

export interface PaginationProps extends PaginationBase {
  current?: number
  count: number
  title?: string
}

export interface PaginationItem extends PaginationBase {
  active: number
  number: number
  children: ReactNode
}

export interface PaginationContextProps extends PaginationBase {}
