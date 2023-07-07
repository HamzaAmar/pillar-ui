/* eslint-disable no-unused-vars */
import type { ComponentPropsWithoutRef } from 'react'
import type { Color, Size, Corner } from '../../types'

type State = 'idle' | 'checked' | 'indeterminate'

export interface SwitchProps extends Omit<ComponentPropsWithoutRef<'button'>, 'size'> {
  size?: Size
  state?: State
  color?: Color
  corner?: Corner
  label: string
  pressed?: boolean
  defaultPressed?: boolean
  onPressedChange?: () => void
}
