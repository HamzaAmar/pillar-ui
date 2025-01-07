import type { Corner, Size } from '../../types'
import type { ReactNode } from 'react'

export interface SkeletonBase {
  children: ReactNode
  isLoading: boolean
}
export interface SkeletonAvatarProps extends SkeletonBase {
  size?: Size
  corner?: Corner
}
export interface SkeletonTextProps extends SkeletonBase {
  size?: Size
  lines?: number
}
export interface SkeletonButtonProps extends SkeletonBase {
  size?: Size
}
export interface SkeletonProps extends SkeletonBase {
  height: string
  width?: string
}
