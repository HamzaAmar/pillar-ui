import { CustomMDX } from '~/app/_components/mdx/mdx'
import { getComponentBySlug, getComponents } from '~/api/docs'
import { Metadata } from 'next'
import { DOMAIN } from '~/constant/domain'
import { notFound } from 'next/navigation'
import { SlugParamsProps } from '~/types/params'
import { DocHeader, TableOfContent } from '~/app/_components'

export async function generateStaticParams() {
  return getComponents().map(({ slug }) => ({
    slug,
  }))
}

function Page({ params }: SlugParamsProps) {
  const component = getComponentBySlug(params.slug)
  if (!component) notFound()
  const { content, headings, ...rest } = component

  return (
    <>
      <div>
        <DocHeader root="pillar-core/src/core" {...rest} />
        <div className="section prose l_flow__md">
          <CustomMDX source={content} />
        </div>
      </div>
      {<TableOfContent contents={headings} />}
    </>
  )
}

export default Page

export async function generateMetadata({ params }: SlugParamsProps): Promise<Metadata | undefined> {
  const post = getComponentBySlug(params.slug)
  if (!post) {
    return
  }

  let { title, excerpt: description, slug } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${DOMAIN}/docs/components/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
