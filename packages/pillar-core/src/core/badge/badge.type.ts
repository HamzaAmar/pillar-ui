import type { ReactElement } from 'react'
import type { Size, Color, Corner } from '../../types'

interface BadgeBaseProps {
  size?: Size
  color?: Color
  corner?: Corner
}

interface BadgeNumericProps extends BadgeBaseProps {
  variant: 'numeric'
  value: number
  max?: number
}

interface IconBadgeProps extends BadgeBaseProps {
  variant: 'icon'
  icon: ReactElement
}

interface BadgeDotProps extends BadgeBaseProps {
  variant: 'dot'
}

export type BadgeProps = BadgeNumericProps | BadgeDotProps | IconBadgeProps
