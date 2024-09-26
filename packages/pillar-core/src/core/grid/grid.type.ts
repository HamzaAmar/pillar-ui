import { ReactNode } from 'react'
import { Size } from '../../types'
// import { Size } from '../../types'

type Items = 'center' | 'end' | 'start'
type Justify = 'start' | 'around' | 'between' | 'evenly' | 'end' | 'center'

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
