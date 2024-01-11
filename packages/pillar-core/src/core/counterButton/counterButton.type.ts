import type { UseCounterProps } from '@pillar-ui/hooks'
import type { Color, Size } from '../../types'

export interface CounterButtonProps extends UseCounterProps {
  spacing?: Size
  size?: Size
  color?: Color
}
