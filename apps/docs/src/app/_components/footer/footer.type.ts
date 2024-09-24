export interface FooterItemProps {
  href: string
  text: React.ReactNode
  external?: boolean
}

export interface FooterNavProps {
  title: string
  links: FooterItemProps[]
}
