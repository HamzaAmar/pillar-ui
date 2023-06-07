import { ParsedUrlQuery } from 'querystring'
import { Paper } from '@pillar/core'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { GetStaticProps } from 'next'
import { allComponents } from 'contentlayer/generated'
import type { Components } from 'contentlayer/generated'
import { DocsLayout } from '../../../component/common'

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params

  const post = allComponents.find((component) => slug === component.slug)

  return { props: { post } }
}

export function getStaticPaths() {
  return {
    paths: allComponents.map(({ slug }) => ({
      params: {
        slug,
      },
    })),

    fallback: false,
  }
}

const mdxComponents = {
  Demo: ({ children }: any) => {
    console.log(children)
    return (
      <div>
        <Paper>{children}</Paper>
      </div>
    )
  },
}

export default function Components({ post }: { post: Components }) {
  const { body, ...rest } = post
  const Component = useMDXComponent(body.code)

  return (
    <DocsLayout {...rest}>
      <Component components={mdxComponents} />
    </DocsLayout>
  )
}
