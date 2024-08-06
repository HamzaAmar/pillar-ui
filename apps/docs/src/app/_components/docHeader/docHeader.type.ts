import type { SharedDocs } from '~/types/docs'

export interface DocHeaderProps extends Omit<SharedDocs, 'content' | 'headings' | 'lastModified' | 'publishedAt'> {
  items?: string[] | undefined
  root: string
}
