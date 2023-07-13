import { ParsedUrlQuery } from 'querystring'

import { useMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'
import { GetStaticProps } from 'next'
import { allThemes } from '../../../../.contentlayer/generated'
import type { Theme } from '../../../../.contentlayer/generated'
import { DocsLayout, mdxComponents } from '../../../component/common'

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params

  const hook = allThemes.find((component) => slug === component.slug)

  return { props: { hook } }
}

export function getStaticPaths() {
  return {
    paths: allThemes.map(({ slug }) => ({
      params: {
        slug,
      },
    })),

    fallback: false,
  }
}

export default function Blog({ hook }: { hook: Theme }) {
  const { body, ...rest } = hook

  const Component = useMDXComponent(body.code)

  return (
    <DocsLayout {...rest}>
      <Component components={mdxComponents} />
    </DocsLayout>
  )
}
