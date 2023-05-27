// import type { CSSProperties } from 'react'
import { ReactElement } from 'react'
import type { Color, Corner, Direction, Size, Variant } from '../../types'

interface TabsBase {
  direction?: Direction
  color?: Color
  defaultValue?: number
  size?: Size
  variant?: Omit<Variant, 'text'> & 'bordered'
  corner?: Corner
  id?: string
}

export interface TabsProps extends TabsBase {}

export interface TabPanelProps {
  value: number
}
export interface TabProps {
  title: string
  icon?: ReactElement
  value: number
}

export interface TabListProps {}

export interface TabsProviderProps extends TabsBase {
  handleSelect: (value: number) => void
  selected: number
}
