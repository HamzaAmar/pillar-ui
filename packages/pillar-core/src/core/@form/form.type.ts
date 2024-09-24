import type { Color, Corner, Size, Transform } from '../../types'
import type { ComponentPropsWithRef, ReactNode, ReactElement, AriaAttributes } from 'react'
import type { TypographyProps } from '../typography'

type Variant = 'filled' | 'outline' | 'bordered'
type Status = 'dan' | 'suc' | 'war' | 'pri' | 'text'
type Direction = 'row' | 'column'

interface FormFieldSharedProps {
  corner?: Corner
  size?: Size
  fluid?: boolean
  variant?: Variant
  color?: Color
  transform?: Transform
}

export interface FieldProps extends FormFieldSharedProps, AddonsProps {
  children: ReactNode
}
interface SharedProps {
  required?: boolean
  disabled?: boolean
  value?: any
  maxLength?: number | undefined
  children: ReactNode
  status?: Status
  id?: string
}

export interface FormGroupProps extends FormFieldSharedProps {
  title: string
  children: ReactNode
  direction?: Direction

  hideTitle?: boolean
  hideBorder?: boolean
}

export interface SelectProps extends Omit<ComponentPropsWithRef<'select'>, 'size' | 'color'>, FormFieldSharedProps {
  isInvalid?: boolean
  status?: Status
}

export interface PinInputProps extends Omit<ComponentPropsWithRef<'input'>, 'size' | 'color'>, FormFieldSharedProps {
  length?: number
}

interface AddonsProps {
  prefixInput?: ReactNode | string
  suffixInput?: ReactNode | string
}

export interface InputProps
  extends AddonsProps,
    FormFieldSharedProps,
    Omit<ComponentPropsWithRef<'input'>, 'size' | 'color'> {
  status?: Status
  className?: string
  isInvalid?: boolean
}

export interface InputPasswordProps extends Omit<InputProps, 'suffixInput'> {
  visibleIcon?: ReactElement
  hiddenIcon?: ReactElement
}

export interface InputSearchProps extends InputProps {}

export interface TextareaProps
  extends AddonsProps,
    Omit<ComponentPropsWithRef<'textarea'>, 'size' | 'color'>,
    FormFieldSharedProps {
  isInvalid?: boolean
  status?: Status
}

export interface TextFormFieldProps extends Omit<SharedProps, 'id'> {
  label: string
  trailingIcon?: ReactNode
  leadingIcon?: ReactNode
  hideLabel?: boolean
  readOnly?: boolean
  id?: string
  isInvalid?: boolean
  message?: string
  hint?: string
}

export interface FormControllerContextProps extends Omit<SharedProps, 'children'> {
  describedby: AriaAttributes['aria-describedby']
  hasError: boolean
}
export interface FormGroupContextProps extends FormFieldSharedProps {}

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

export interface InputNumberButtonProps {
  onClick: () => void
  title: string
  direction?: 'bottom' | 'top'
}
