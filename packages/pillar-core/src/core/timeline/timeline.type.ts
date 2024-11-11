import type { Color, Corner, Size } from '../../types'
import type { ReactElement, ReactNode } from 'react'

type Variant = 'solid' | 'dotted' | 'dashed'

export interface TimelineBase {
  corner?: Corner
  size?: Size
  variant?: Variant
}

export interface TimelineProps extends TimelineBase {
  color?: Color
  children: ReactNode
}

export interface TimelineItemProps extends TimelineBase {
  children: ReactNode
  bullet?: ReactElement
}

export interface TimelineContextProps extends TimelineBase {}

export interface TimelineContextProviderProps extends TimelineContextProps {
  children: ReactNode
}
