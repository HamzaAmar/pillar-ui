/* eslint-disable no-unused-vars */
import type { ReactNode } from 'react'
import { Color, Items, Justify, Size } from '../../types'

type Direction = 'column' | 'row'
type Flex = '1' | 'none' | 'auto'

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

export interface FlexItemProps {
  grow: number
  shrink: number
  basis: number
  order: number
}
