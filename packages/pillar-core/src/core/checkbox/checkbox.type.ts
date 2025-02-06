import type { Color, Size, Variant } from '../../types'
import type { ReactNode, ComponentPropsWithoutRef } from 'react'
import { FieldsetProps } from '../fieldset/fieldset.type'

type State = 'idle' | 'checked' | 'indeterminate'

interface CustomSharedProps {
  indicator?: boolean
  reversed?: boolean
  fluid?: boolean
}

interface SharedProps {
  color?: Color
  size?: Size
  variant?: Omit<Variant, 'text'>
}
export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size' | 'color'>, SharedProps {
  state?: State
  isIndeterminate?: boolean
  icon?: ReactNode
}

export interface CheckGroupProps extends Omit<FieldsetProps, 'size' | 'color'>, SharedProps, CustomSharedProps {}

export interface CheckboxContextProps extends SharedProps, CustomSharedProps {}
export interface CustomCheckboxProps extends CustomSharedProps, CheckboxProps {
  children?: ReactNode
}
