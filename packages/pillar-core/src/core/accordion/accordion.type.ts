import type { ReactElement, Dispatch, SetStateAction } from 'react'
import { Color, Corner, Size, Variant } from '../../types'

export interface AccordionProps {
  type?: 'single' | 'multiple'
  collapsible?: boolean
  color?: Color
  variant?: Variant
  corner?: Corner
  size?: Size
  separate?: boolean
}

export type Value = number | string

export interface AccordionButtonProps {
  id?: string
  icon?: ReactElement
}
export interface AccordionItemProps {
  value: Value
  variant?: Variant
}
export interface AccordionPanelProps {
  id?: string
}
export interface UseAccordionReturns {
  state: Value | Value[]
  setState: Dispatch<SetStateAction<Value | Value[]>>
  toggleAccordion: (currentIndex: Value) => void
  isItemOpen: (value: Value) => boolean
}

export interface AccordionContextProps extends Partial<UseAccordionReturns> {
  id?: string
  variant?: Variant
  corner?: Corner
}
export interface AccordionItemContextProps {
  id?: string
  value: Value
}
