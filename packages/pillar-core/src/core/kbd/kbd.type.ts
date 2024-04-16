import type { Color, Corner, Size, Transform, Variant } from '../../types'

export interface KbdProps {
  title: string
  size?: Size
  color?: Color
  corner?: Corner
  transform?: Transform
  variant?: Variant
}
