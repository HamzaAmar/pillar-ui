// import type { CSSProperties } from 'react'
import { ReactElement } from 'react'
import type { Color, Corner, Orientation, Size, Variant } from '../../types'

interface TabsBase {
  orientation?: Orientation
  color?: Color
  defaultValue?: number
  size?: Size
  variant?: Omit<Variant, 'text'> | 'bordered'
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

export interface TabPanelsProps {}

export interface TabListProps {}

export interface TabsProviderProps extends TabsBase {
  handleSelect: (value: number) => void
  // handleKeySelect: ({ key, preventDefault }: KeyboardEvent) => void
  selected: number
}
