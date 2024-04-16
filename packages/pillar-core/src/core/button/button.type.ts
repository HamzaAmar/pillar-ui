import type { ReactElement, ReactNode } from 'react'
import type { Color, Size, Corner, Variant, Direction, Transform } from '../../types'

// type VariantUnion = Variant | 'link' | 'text'
type Position = 'start' | 'end'
type State = 'idle' | 'loading'

type ButtonVariant = Variant | 'link' | 'shadow'

interface BaseButton {
  color?: Color
  size?: Size
  corner?: Corner
  variant?: ButtonVariant
  state?: State
  icon?: ReactElement
  transform?: Transform
}

/**
 * A reusable button component.
 *
 * @param {Object} props - The props for the button.
 * @param {Size} [props.size='md'] - The size of the button.
 * @param {Color} [props.color='primary'] - The color of the button.
 * @param {Corner} [props.corner='xs'] - The corner of the button.
 * @param {Variant} [props.variant='solid'] - The variant of the button.
 * @param {ReactElement} [props.icon]  - The icon of the button.
 * @param {Position} [props.iconPosition = 'start'] - The icon of the button.
 */
export interface ButtonProps extends BaseButton {
  iconPosition?: Position
  fluid?: boolean
  children: ReactNode
  shadow?: boolean
}

export interface IconButtonProps extends BaseButton {
  title: string
}

export interface ButtonGroupProps extends BaseButton {
  direction?: Direction
  gap?: Size
}
