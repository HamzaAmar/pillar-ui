import { Corner, Size } from '../../types'
import type { ComponentPropsWithRef, ReactNode, ReactElement } from 'react'
import { TypographyProps } from '..'

type Variant = 'filled' | 'outline' | 'bordered'
type Status = 'danger' | 'success' | 'warning' | 'primary' | 'text'
type Direction = 'row' | 'column'

interface SharedProps {
  required?: boolean
  disabled?: boolean
  value?: any
  maxLength?: number | undefined
  children: ReactNode
  status?: Status
  id?: string
}

export interface FormGroupProps {
  title: string
  showLabel?: boolean
  children: ReactNode
  direction?: Direction
  fluid?: boolean
  hideBorder?: boolean
}

export interface SelectProps extends Omit<ComponentPropsWithRef<'select'>, 'size'> {
  corner?: Corner
  size?: Size
  fluid?: boolean
  isInvalid?: boolean
  variant?: Variant
  status?: Status
}

export interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  variant?: Variant
  corner?: Corner
  status?: Status
  size?: Size
  className?: string
  prefixInput?: ReactNode | string
  suffixInput?: ReactNode | string
  isInvalid?: boolean
  fluid?: boolean
}
export interface TextAreaProps extends ComponentPropsWithRef<'textarea'> {
  variant?: Variant
  corner?: Corner
  className?: string
  prefixInput?: ReactNode | string
  suffixInput?: ReactNode | string
  isInvalid?: boolean
  status?: Status
  fluid?: boolean
  size?: Size
}

export interface TextFormFieldProps extends Omit<SharedProps, 'id'> {
  label: string
  trailingIcon?: ReactNode
  leadingIcon?: ReactNode
  className?: string
  hideLabel?: boolean
  readOnly?: boolean
  id?: string
  isInvalid?: boolean
  message?: string
  hint?: string
}

export interface TextFieldProviderProps extends SharedProps {
  ariaDescribedby: string | null
}
export interface TextFieldGroupContextProps extends Omit<TextFieldProviderProps, 'children'> {}

export interface FormControllerProps {
  children: ReactNode
  label: string
  error?: string
  hint?: string
  hideLabel?: boolean
  required?: boolean
  className?: string
}

export type FormLabelProps = {
  hideLabel?: boolean
  label: string
  id?: string
} & TypographyProps

export interface FormMessageProps {
  message: string
  icon?: ReactElement
}
