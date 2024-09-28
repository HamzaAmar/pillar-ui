import { ReactNode } from 'react'
import { Items, Justify, Size } from '../../types'
// import { Size } from '../../types'

export interface GridBaseProps {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

export interface GridProps extends GridBaseProps {
  children: ReactNode
  items?: Items
  justify?: Justify
  grid: string
  gap?: Size
}

export interface GridItemProps extends GridBaseProps {
  children: ReactNode
  placement: string
}
