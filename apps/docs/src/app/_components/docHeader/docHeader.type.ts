import type { SharedDocs } from '~/types/docs'

export interface DocHeaderProps extends Omit<SharedDocs, 'content' | 'headings'> {
  type: 'core' | 'hooks' | 'utils' | 'tutorials' | 'getting-started' | 'features' | 'themes'
  items?: string[] | undefined
  shared: string
  directory: string
}
