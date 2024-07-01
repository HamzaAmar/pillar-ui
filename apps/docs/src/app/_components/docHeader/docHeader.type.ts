import type { SharedDocs } from '~/types/docs'

export interface DocHeaderProps extends Omit<SharedDocs, 'content' | 'headings'> {
  items?: string[] | undefined
  root: string
}
