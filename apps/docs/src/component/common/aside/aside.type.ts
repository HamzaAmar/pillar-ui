import { ReactNode } from 'react'

export interface HeadingProps {
  level?: number
  text: string
  slug: string
}

export interface TableItemProps extends Omit<HeadingProps, 'slug'> {
  isActive: boolean
  link?: string
  children?: ReactNode
}

export interface MenuItemProps {
  link: string
  title: string
  isActive: boolean
}

export type MenuItemData = 'getting-started' | 'components' | 'hooks' | 'icons' | 'themes' | 'utils'
