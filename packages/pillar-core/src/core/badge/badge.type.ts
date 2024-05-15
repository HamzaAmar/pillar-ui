import type { ReactElement } from 'react'
import type { Size, Color, Corner } from '../../types'

interface BadgeBaseProps {
  size?: Size
  color?: Color
  corner?: Corner
  highContrast?: boolean
  variant?: 'solid' | 'mixed'
}

interface BadgeNumericProps extends BadgeBaseProps {
  type: 'numeric'
  number: number
  max?: number
  showZero?: boolean
}

interface IconBadgeProps extends BadgeBaseProps {
  type: 'icon'
  icon: ReactElement
}

interface BadgeDotProps extends BadgeBaseProps {
  type: 'dot'
}

export type BadgeProps = BadgeNumericProps | BadgeDotProps | IconBadgeProps
