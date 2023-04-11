import type { Color, Size } from '../../types'
import type { ReactNode, ComponentPropsWithoutRef } from 'react'

type State = 'idle' | 'checked' | 'indeterminate'

export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  state?: State
  color?: Color
  size?: Size
  label: ReactNode
  showLabel?: boolean
  isIndeterminate?: boolean
  icon?: ReactNode
}
