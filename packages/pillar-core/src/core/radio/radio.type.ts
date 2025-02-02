import type { Color, Size, Variant } from '../../types'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { FieldsetProps } from '../fieldset/fieldset.type'

interface SharedProps {
  color?: Color
  size?: Size
  variant?: Variant
}

interface RadioGroup {
  name?: string
}

export interface RadioProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  color?: Color
  size?: Size
  variant?: Omit<Variant, 'text'>
  items?: 'center' | 'end' | 'start'
}

// export interface RadioGroupProps extends RadioGroup, SharedProps, RadioGroupBase {}
export interface RadioGroupProps extends Omit<FieldsetProps, 'size' | 'color'>, RadioGroup, SharedProps {}

export interface RadioContextProps extends RadioGroup, SharedProps {}
export interface CustomRadioProps extends RadioProps {
  children?: ReactNode
  direction?: 'col' | 'row'
  indicator?: boolean
  reversed?: boolean
}
