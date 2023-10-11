export interface DocHeaderProps {
  type: 'Components' | 'Hooks' | 'Utils' | 'Tutorials'
  title: string
  excerpt: string
  items?: string[] | undefined
  file?: string
  slug: string
}
