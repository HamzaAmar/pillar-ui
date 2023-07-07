import React from 'react'
import { Footer, Header, MenuBar, TableOfContent } from '..'
import { Flex, Paper } from '@pillar/core'
import type { DocsLayoutProps, LayoutProps } from './layout.type'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="l_flex-1">{children}</main>
      <Footer />
    </>
  )
}

export const DocsLayout = ({ children, headings }: DocsLayoutProps) => {
  return (
    <>
      <Header />
      <Flex>
        <MenuBar />
        <main style={{ minWidth: 0 }}>
          <Paper p="md" flow="sm">
            {children}
          </Paper>
        </main>
        {headings ? <TableOfContent contents={headings} /> : null}
      </Flex>
      <Footer />
    </>
  )
}
