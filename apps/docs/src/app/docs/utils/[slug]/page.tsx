import { CustomMDX } from '~/app/_components/mdx'
import { getUtilBySlug, getUtils } from '~/api/docs'
import { notFound } from 'next/navigation'
import { SlugParamsProps } from '~/types/params'
import { Metadata } from 'next'
import { DOMAIN } from '~/constant/domain'
import { DocHeader, TableOfContent } from '~/app/_components'

interface Props {
  slug: string
}
export async function generateStaticParams() {
  return getUtils().map(({ slug }) => ({
    slug,
  }))
}

export default function Blog({ params }: SlugParamsProps) {
  const util = getUtilBySlug(params.slug)
  if (!util) notFound()
  const { content, headings, ...rest } = util

  return (
    <>
      <div className="docs--content Sf-6">
        <DocHeader root="pillar-utils/src" {...rest} />
        <div className="section prose Sf-5">
          <CustomMDX source={content} />
        </div>
      </div>
      {<TableOfContent contents={headings} />}
    </>
  )
}

export async function generateMetadata({ params }: SlugParamsProps): Promise<Metadata | undefined> {
  const post = getUtilBySlug(params.slug)
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
      url: `${DOMAIN}/docs/utils/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@pillar_ui',
    },
  }
}
