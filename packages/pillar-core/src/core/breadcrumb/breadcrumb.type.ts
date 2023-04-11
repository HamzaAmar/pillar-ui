import type { ReactElement, ReactNode } from 'react'
import type { Color, Size } from '../../types'

export interface BreadcrumbProps {
  children: ReactNode
  separator?: string | ReactElement
  size?: Size
  color?: Color
}

export interface BreadcrumbItemProps extends BreadcrumbProps {
  link: string
  current?: boolean
  icon?: ReactNode
}

export interface BreadcrumbContextType extends Omit<BreadcrumbProps, 'children'> {}

export interface BreadcrumbProviderProps extends BreadcrumbProps {}
