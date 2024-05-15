import React, { useState } from 'react'
import Head from 'next/head'
import { Footer, Header, MenuBar, TableOfContent } from '..'
import { Flex, Paper } from '@pillar-ui/core'
import type { DocsLayoutProps, LayoutProps, MetaProps } from './layout.type'
import { DOMAIN } from 'src/constant/domain'
import { useRouter } from 'next/router'

export const Layout = ({ children, title, image = '/darkHero.png', description, ...rest }: LayoutProps) => {
  const router = useRouter()

  const meta: MetaProps = {
    title: `${title} – Pillar UI library`,
    description,
    image: image,
    ...rest,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />

        <meta name="robots" content="follow, index" />
        <meta name="googlebot" content="noindex,nofollow" />

        <link rel="canonical" href={`${DOMAIN}${router.asPath}`} />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`${DOMAIN}${router.asPath}`} />
        <meta property="og:site_name" content="Hamza Miloud Amar" />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pillar_ui" />
        <meta name="twitter:creator" content="@pillar_ui" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}

        <meta name="theme-color" media="(prefers-color-scheme: light)" content="hsl(226deg 70% 55.5%)" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="hsl(226deg 70% 55.5%)" />
      </Head>
      <Header />
      <main className="l_flex-1">{children}</main>
      <Footer />
    </>
  )
}

export const DocsLayout = ({ children, headings, title, image, ...rest }: DocsLayoutProps) => {
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen((open) => !open)
  }
  const router = useRouter()

  const imageIfExist = image ? { image: `https://miloudamar.com/${image}` } : {}

  const meta: MetaProps = {
    title: `${title} – Pillar UI library`,
    description: rest.excerpt,
    ...imageIfExist,
    ...rest,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${DOMAIN}${router.asPath}`} />
        <link rel="canonical" href={`${DOMAIN}${router.asPath}`} />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Hamza Miloud Amar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pillar_ui" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>

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
