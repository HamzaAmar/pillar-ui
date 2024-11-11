import { RefObject } from 'react'
import { Corner, Size } from '../../types'

export type Align = 'start' | 'end' | 'center'

export interface TooltipProps {
  position?: 'top' | 'bottom' | 'left' | 'right'
  align?: Align
  delay?: number
}

export interface TooltipContentProps {
  position?: 'top' | 'bottom' | 'left' | 'right'
  align?: Align
  duration?: number
  corner?: Corner
  size?: Size
}

export interface TooltipContext {
  open: boolean
  handleToggle: () => void
  handleClose: () => void
  handleOpen: () => void
  triggerRef: RefObject<HTMLButtonElement>
  delay: number
  id: string
  size?: Size
}
