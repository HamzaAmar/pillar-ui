import type { ReactElement, ReactNode } from 'react'
import type { Color, Size } from '../../types'

export interface BreadCrumbBase {
  separator?: string | ReactElement
  size?: Size
  color?: Color
}

export interface BreadcrumbProps extends BreadCrumbBase {
  children: ReactNode
}

export interface BreadcrumbItemProps extends BreadcrumbProps {
  link: string
  current?: boolean
  icon?: ReactNode
}

export interface BreadcrumbContextProps {
  separator?: string | ReactElement
}

export interface CurrentPage {
  'aria-current'?: 'page'
}
