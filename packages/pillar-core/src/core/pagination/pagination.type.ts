import type { ReactNode } from 'react'
import type { Color, Corner, Size, Variant } from '../../types'

interface PaginationBase {
  color?: Color
  variant?: Variant
  corner?: Corner
  size?: Size
}

export interface PaginationProps extends PaginationBase {
  max?: number
  current: number
  count: number
  pageSize?: number
  title: string
  number?: number
}

export interface PaginationItem extends PaginationBase {
  active: number
  number: number
  children: ReactNode
}

export interface PaginationContextProps extends PaginationBase {}
