import { ReactNode } from 'react'
import type { Color, Corner, Size, Variant } from '../../types'

type Animate = 'zoom' | 'jump-y' | 'jump-x'
export interface AvatarProps {
  title?: string
  image?: string
  size?: Size
  corner?: Corner
  color?: Color
  variant?: Omit<Variant, 'text'>
  animate?: Animate
}

export interface AvatarGroupProps extends AvatarProps {
  limit?: number
  layout?: 'stack' | 'grid'
  variant?: Variant
  children: ReactNode
  animate?: Animate
}

export interface AvatarGroContextProps extends AvatarProps {}
export interface AvatarGroupProviderProps extends AvatarGroContextProps {
  children: ReactNode
}
