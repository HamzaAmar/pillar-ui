import type { Color, Size, Variant } from '../../types'
import type { ReactNode, ComponentPropsWithoutRef } from 'react'

type State = 'idle' | 'checked' | 'indeterminate'

export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  state?: State
  color?: Color
  size?: Size
  isIndeterminate?: boolean
  icon?: ReactNode
  variant?: Variant
}
