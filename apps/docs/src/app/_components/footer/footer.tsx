import React from 'react'
import { default as Logo } from '../logo'
import { Text, Grid, Paper } from '@pillar-ui/core'
import Link from 'next/link'
import { FooterItemProps } from './footer.type'
import { FOOTER_ITEMS } from './footer.data'

const FooterItem = ({ href, text, external = false }: FooterItemProps) => {
  const rest = external ? { target: '_blank' } : {}
  return (
    <li>
      <Text
        transform="capitalize"
        color="bg"
        low
        as={external ? 'a' : Link}
        className="footer_link"
        href={href}
        {...rest}
      >
        {text}
      </Text>
    </li>
  )
}

const FooterNav = ({ links, title }: { title: string; links: FooterItemProps[] }) => {
  return (
    <nav className="l_f-sm">
      <Text transform="capitalize" size="md" weight="medium">
        {title}
      </Text>
      <ul className="footer-list l_f-xs">
        {links.map(({ href, text, external }) => (
          <FooterItem key={href} href={href} text={text} external={external} />
        ))}
      </ul>
    </nav>
  )
}

const footer = () => {
  return (
    <footer>
      <Paper background="bg-3" as={Grid} p="lg" gap="sm" grid="repeat(4, minmax(1px, 1fr))" xs="1fr" lg="1fr 1fr">
        <div>
          <Logo width={100} />
          <Text transform="first-letter-only" color="bg" low>
            Your comprehensive solution for modern web development. Reusable UI components, React hooks, icons, and
            tools designed with accessibility and scalability in mind. Empower your web applications effortlessly
          </Text>
        </div>
        {FOOTER_ITEMS.map(({ title, links }) => (
          <FooterNav key={title} title={title} links={links} />
        ))}
      </Paper>
      <Paper className="u_center" p="xs">
        Pillar UI · Made by Hamza Miloud Amar
      </Paper>
    </footer>
  )
}

export default footer
