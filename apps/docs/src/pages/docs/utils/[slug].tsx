import { ParsedUrlQuery } from 'querystring'

import { useMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'
import { GetStaticProps } from 'next'
import { allUtils } from 'contentlayer/generated'
import type { Hooks } from 'contentlayer/generated'
import { DocsLayout, mdxComponents } from '../../../component/common'
import { DocHeader } from '../../../component/core'

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params

  const hook = allUtils.find((component) => slug === component.slug)

  return { props: { hook } }
}

export function getStaticPaths() {
  return {
    paths: allUtils.map(({ slug }) => ({
      params: {
        slug,
      },
    })),

    fallback: false,
  }
}

export default function Blog({ hook }: { hook: Hooks }) {
  const { body, ...rest } = hook

  const Component = useMDXComponent(body.code)

  return (
    <DocsLayout {...rest}>
      <DocHeader {...rest} />
      <Component components={mdxComponents} />
    </DocsLayout>
  )
}
