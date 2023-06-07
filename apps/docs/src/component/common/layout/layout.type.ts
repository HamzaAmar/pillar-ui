import type { ReactNode } from 'react'
import type { Components } from 'contentlayer/generated'

export interface LayoutProps {
  children: ReactNode
}

export interface DocsLayoutProps extends Omit<Components, 'body'> {
  children: ReactNode
}
