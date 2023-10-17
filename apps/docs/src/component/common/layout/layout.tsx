import React, { useState } from 'react'
import { Footer, Header, MenuBar, TableOfContent } from '..'
import { Flex, Paper } from '@pillar-ui/core'
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
  const [open, setOpen] = useState(false)

  function handleToggle() {
    console.log('Hello this is the value of open', open)
    setOpen((open) => !open)
  }

  return (
    <>
      <Header handleToggle={handleToggle} />
      <Flex>
        <MenuBar open={open} />
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
