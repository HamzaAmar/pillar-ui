import { ParsedUrlQuery } from 'querystring'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { GetStaticProps } from 'next'
import { allTutorials } from 'contentlayer/generated'
import type { Tutorials } from 'contentlayer/generated'
import { DocsLayout, mdxComponents } from '../../../component/common'
import { DocHeader } from '../../../component/core'

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params

  const post = allTutorials.find((component) => slug === component.slug)

  return { props: { post } }
}

export function getStaticPaths() {
  return {
    paths: allTutorials.map(({ slug }) => ({
      params: {
        slug,
      },
    })),

    fallback: false,
  }
}

export default function Components({ post }: { post: Tutorials }) {
  const { body, ...rest } = post
  const Component = useMDXComponent(body.code)

  return (
    <DocsLayout {...rest}>
      <DocHeader {...rest} />
      <Component components={mdxComponents} />
    </DocsLayout>
  )
}
