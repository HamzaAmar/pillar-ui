import type { ReactNode } from 'react'
import type { Corner, Variant } from '../../types'

type Status = 'success' | 'warning' | 'danger' | 'info'

export interface AlertProps {
  type?: Status
  title?: string
  message?: string
  variant?: Omit<Variant, 'transparent'>
  showIcon?: boolean
  inline?: boolean
  corner?: Corner
}

export type IconsStatus = Record<Status, ReactNode>
