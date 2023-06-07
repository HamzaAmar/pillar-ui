import React from 'react'
import { Footer, Header, MenuBar, TableOfContent } from '..'
import { Flex, Paper, Heading, Text, Button, Grid, Chips } from '@pillar/core'
import type { DocsLayoutProps, LayoutProps } from './layout.type'
import { Github } from '@pillar/icons'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="l_flex-1">{children}</main>
      <Footer />
    </>
  )
}

export const DocsLayout = ({ children, headings, title, excerpt, type, items, file }: DocsLayoutProps) => {
  return (
    <>
      <Header />
      <Flex>
        <MenuBar />
        <main style={{ minWidth: 0 }}>
          {type == null ? null : (
            <Paper spacing="lg" padding="md">
              <Heading size="2xl">
                {title} {type} Documantation
              </Heading>
              <Text color="surface" contrast="low" size="sm" weight="medium">
                {excerpt}
              </Text>

              <Grid columns="auto minmax(0, 1fr)" gap="xl">
                <Text weight="medium" size="sm" color="surface" contrast="low">
                  Components:
                </Text>
                <Flex gap="sm">{type === 'Components' && items?.map((item) => <Chips key={item}>{item}</Chips>)}</Flex>
                <Text weight="medium" size="sm" color="surface" contrast="low">
                  import
                </Text>
                <Flex gap="sm">
                  <code>
                    import <b>{`{ ${title} }`}</b> from {`'@pillar/${file}'`}
                  </code>
                </Flex>
              </Grid>

              <Flex gap="sm">
                <Button color="surface" icon={<Github strokeWidth={2} />} size="sm">
                  Source Code
                </Button>
                <Button variant="soft" color="surface" icon={<Github strokeWidth={2} />} size="sm">
                  Issues
                </Button>
                <Button variant="soft" color="surface" icon={<Github strokeWidth={2} />} size="sm">
                  discussions
                </Button>
              </Flex>
            </Paper>
          )}

          <Paper padding="md" spacing="lg">
            {children}
          </Paper>
        </main>
        {headings ? <TableOfContent contents={headings} /> : null}
      </Flex>
      <Footer />
    </>
  )
}
