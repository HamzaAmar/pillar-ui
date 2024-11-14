import type { Color, Corner, Size, Variant } from '../../types'
import type { ReactNode } from 'react'

type Line = 'solid' | 'dotted' | 'dashed'

export interface TimelineBase {
  corner?: Corner
  size?: Size
  line?: Line
  variant?: Variant
  content?: ReactNode
  color?: Color
}

export interface TimelineProps extends TimelineBase {
  children: ReactNode
}

export interface TimelineItemProps extends TimelineBase {
  children: ReactNode
}

export interface TimelineContextProps extends TimelineBase {}

export interface TimelineContextProviderProps extends TimelineContextProps {
  children: ReactNode
}
