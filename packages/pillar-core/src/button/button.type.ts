import type { ReactElement, CSSProperties, ReactNode } from 'react'

// type VariantUnion = Variant | 'link' | 'text'
type Position = 'start' | 'end'
type State = 'idle' | 'loading'

interface BaseButton {
  color: 'violet' | 'gray'
  state?: State
  icon?: ReactElement
  className?: string
  style?: CSSProperties
}
export interface ButtonProps extends BaseButton {
  iconPosition?: Position
  fluid?: boolean
  children: ReactNode
}

export interface IconButtonProps extends BaseButton {
  title: string
}
