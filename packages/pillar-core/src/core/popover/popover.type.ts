import { ReactNode, RefObject } from 'react'
import { Corner, Size } from '../../types'

export type Align = 'start' | 'end' | 'center'

export interface PopoverProps {
  triggerElement: RefObject<HTMLElement>
  children: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  isOpen: boolean
  align?: Align
  onClose: () => void
  size?: Size
  offset?: number
  width?: 'full' | 'auto'
  corner?: Corner
}
