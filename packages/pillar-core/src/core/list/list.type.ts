import type { ReactNode } from 'react'
import type { Size } from '../../types'

export interface ListProps {
  title: string
  size?: Size
  flow?: Size
  hideStyle?: boolean
}

export interface ListItemProps {
  children: ReactNode
}
