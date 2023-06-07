export interface HeadingProps {
  level: number
  text: string
  slug: string
}

export interface TableItemProps extends HeadingProps {
  isActive: boolean
}

export interface MenuItemProps {
  link: string
  title: string
  isActive: boolean
}

export type MenuItemData = 'get-started' | 'components' | 'hooks' | 'icons' | 'themes'
