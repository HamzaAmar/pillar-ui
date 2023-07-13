import type { ReactNode } from 'react'
import type { Components } from 'contentlayer/generated'

export interface LayoutProps {
  children: ReactNode
}

export interface DocsLayoutProps {
  children: ReactNode
  headings?: Components['headings']
}
