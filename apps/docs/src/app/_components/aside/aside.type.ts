import { ReactNode } from 'react'

export interface HeadingProps {
  level?: number
  slug: string
}

export interface ListItemProps extends Omit<HeadingProps, 'slug'> {
  isActive: boolean
  children?: ReactNode
  icon?: ReactNode
}

export interface MenuItemProps {
  link: string
  title: string
  isActive: boolean
}

export type MenuItemData = 'get-started' | 'components' | 'hooks' | 'icons' | 'themes' | 'utils'
