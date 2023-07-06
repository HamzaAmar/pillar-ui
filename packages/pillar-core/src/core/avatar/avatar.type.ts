import { ReactElement, ReactNode } from 'react'
import type { Color, Corner, Size, Variant } from '../../types'

type Animate = 'zoom' | 'jump-y' | 'jump-x'

interface AvatarBase {
  size?: Size
  corner?: Corner
  color?: Color
  variant?: Omit<Variant, 'text'> | 'dashed'
  animate?: Animate
  fallback?: ReactElement
}

export interface AvatarProps extends AvatarBase {
  title?: string
  image?: string
}

export interface AvatarGroupProps extends AvatarBase {
  limit?: number
  layout?: 'stack' | 'grid'
  children: ReactNode
  animate?: Animate
}

export interface AvatarGroupContextProps extends AvatarBase {}
