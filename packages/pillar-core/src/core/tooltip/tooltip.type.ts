import { RefObject } from 'react'
import { Size } from '../../types'

export type Align = 'start' | 'end' | 'center'

export interface TooltipProps {
  position: 'top' | 'bottom' | 'left' | 'right'
  align: Align
  delay: number
  size?: Size
}

export interface TooltipContentProps {
  position: 'top' | 'bottom' | 'left' | 'right'
  align: Align
  duration: number
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
