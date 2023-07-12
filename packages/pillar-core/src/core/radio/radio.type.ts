import type { Color, Size, Variant } from '../../types'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Direction = 'row' | 'column'

interface SharedProps {
  color?: Color
  size?: Size
}

interface RadioGroupBase {
  direction?: Direction
  showLabel?: boolean
  label: string
}
interface RadioGroup {
  children: ReactNode
  id?: string
  name?: string
}

export interface RadioProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label: string
  color?: Color
  size?: Size
  variant?: Omit<Variant, 'text'>
}

export interface RadioGroupProps extends RadioGroup, SharedProps, RadioGroupBase {}

export interface RadioContextProps extends Omit<RadioGroup, 'id' | 'children'>, SharedProps {}
export interface CustomRadioProps extends RadioProps {
  children: ReactNode
  direction?: 'column' | 'row'
  showLabel?: boolean
}
