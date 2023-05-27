/* eslint-disable no-unused-vars */
import type { ReactNode, CSSProperties } from 'react'
import { Color, Size } from '../../types'

export interface GridBaseProps {
  gap?: Size
  columns?: string
  rows?: string
  areas?: string
}
type Items = 'center' | 'end' | 'start'
type Justify = 'start' | 'around' | 'between' | 'evenly' | 'end' | 'center'
type Direction = 'column' | 'row'
type Flex = '1' | 'none' | 'auto'

export interface GridProps extends GridBaseProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
  items?: Items
  justify?: Justify
}

export interface GridItemProps {
  children: ReactNode
  area?: string
  column?: string
  row?: string
  style?: CSSProperties
  className?: string
}

export interface FlexProps {
  children: ReactNode
  items?: Items
  justify?: Justify
  gap?: Size
  flex?: Flex
  direction?: Direction
  className?: string | ((...args: any) => string)
  wrap?: boolean
  inline?: boolean
}

export interface BoxProps {
  color?: Color
  content?: string
  className?: string
}
