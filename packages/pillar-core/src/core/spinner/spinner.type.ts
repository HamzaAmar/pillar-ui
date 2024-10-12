import type { Color, Size } from '../../types'

export interface SpinnerProps {
  color?: Color
  size?: Size
  thickness?: '1' | '2' | '3' | '4' | '5' | '6'
  invert?: boolean
  className?: string
}
