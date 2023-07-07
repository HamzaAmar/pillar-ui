export interface DocHeaderProps {
  type: 'Components' | 'Hooks' | 'Utils'
  title: string
  excerpt: string
  items?: string[] | undefined
  file: string
}
