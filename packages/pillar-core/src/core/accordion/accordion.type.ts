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

export interface AccordionButtonProps {
  id?: string
  title: string
  icon?: ReactElement
}
export interface AccordionItemProps {
  value: number | string
  variant?: Variant
}
export interface AccordionPanelProps {
  id?: string
}
export interface UseAccordionReturns {
  state: number | number[]
  setState: Dispatch<SetStateAction<number | number[]>>
  toggleAccordion: (currentIndex: number) => void
  isItemOpen: (value: number) => boolean
}

export interface AccordionContextProps extends Partial<UseAccordionReturns> {
  id?: string
  variant?: Variant
  corner?: Corner
}
export interface AccordionItemContextProps {
  id?: string
  value: number
}
