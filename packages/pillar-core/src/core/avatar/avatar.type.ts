import { ReactElement, ReactNode } from 'react'
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
  fallback?: ReactElement
}

export interface AvatarGroupProps extends AvatarProps {
  limit?: number
  layout?: 'stack' | 'grid'
  variant?: Variant & 'dashed'
  children: ReactNode
  animate?: Animate
}

export interface AvatarGroupContextProps extends AvatarProps {}
