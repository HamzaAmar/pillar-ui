import type { SharedDocs } from '~/types/docs'

export interface DocHeaderProps extends Omit<SharedDocs, 'content' | 'headings'> {
  type: 'Components' | 'Hooks' | 'Utils' | 'Tutorials' | 'Getting Started' | 'Features' | 'Themes'
  items?: string[] | undefined
  shared: string
  file: string
}
