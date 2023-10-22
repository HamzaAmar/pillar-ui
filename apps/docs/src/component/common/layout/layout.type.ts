import type { ReactNode } from 'react'
import type { Components } from 'contentlayer/generated'

export interface MetaProps {
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string
}

export interface LayoutProps extends MetaProps {
  children: ReactNode
}

export interface DocsLayoutProps extends MetaProps {
  children: ReactNode
  headings?: Components['headings']
  excerpt: string
}
