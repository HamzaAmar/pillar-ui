import type { Color, Size, Variant } from '../../types'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { FieldsetProps } from '../fieldset/fieldset.type'

interface SharedProps {
  color?: Color
  size?: Size
  variant?: Omit<Variant, 'text'>
}

interface RadioGroup {
  name?: string
}

interface CustomSharedProps {
  indicator?: boolean
  reversed?: boolean
  fluid?: boolean
}

export interface RadioProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size' | 'color'>, SharedProps {
  items?: 'center' | 'end' | 'start'
}

export interface RadioGroupProps
  extends Omit<FieldsetProps, 'size' | 'color'>,
    RadioGroup,
    SharedProps,
    CustomSharedProps {}

export interface RadioContextProps extends RadioGroup, SharedProps, CustomSharedProps {}
export interface CustomRadioProps extends RadioProps, CustomSharedProps {
  children?: ReactNode
  direction?: 'col' | 'row'
}
