import { ReactNode } from 'react'
import { Items, Justify, Size } from '../../types'
// import { Size } from '../../types'

export interface GridBaseProps {
  default?: string
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

export interface GridProps {
  children: ReactNode
  items?: Items
  justify?: Justify
  justifyItem?: Items
  alignContent?: Justify | 'baseline'
  gap?: Size
  cols?: GridBaseProps
  rows?: GridBaseProps
}

export interface GridItemProps {
  children: ReactNode
  col?: GridBaseProps
  row?: GridBaseProps
}
