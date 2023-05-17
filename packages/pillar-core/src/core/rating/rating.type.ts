import type { CSSProperties } from 'react'
import { Color, Size } from '../../types'

type Icon = 'star' | 'heart'

export interface RatingProps {
  rating: number
  size?: Size
  className?: string
  hideTitle?: boolean
  title?: string
  style?: CSSProperties
  color?: Color
  icon?: Icon
}
