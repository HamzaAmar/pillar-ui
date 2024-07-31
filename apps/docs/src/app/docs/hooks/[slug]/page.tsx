import { CustomMDX } from '~/app/_components/mdx/mdx'
import { getHookBySlug, getHooks } from '~/api/docs'
import { SlugParamsProps } from '~/types/params'
import { notFound } from 'next/navigation'
import { DOMAIN } from '~/constant/domain'
import { Metadata } from 'next'
import { DocHeader, TableOfContent } from '~/app/_components'

export async function generateStaticParams() {
  return getHooks().map(({ slug }) => ({
    slug,
  }))
}

export default function Blog({ params }: SlugParamsProps) {
  const hook = getHookBySlug(params.slug)
  if (!hook) notFound()
  const { content, headings, ...rest } = hook
  return (
    <>
      <div>
        <DocHeader root="pillar-hooks/src" {...rest} />
        <div className="section prose l_flow__md">
          <CustomMDX source={content} />
        </div>
      </div>
      {<TableOfContent contents={headings} />}
    </>
  )
}

export async function generateMetadata({ params }: SlugParamsProps): Promise<Metadata | undefined> {
  const hook = getHookBySlug(params.slug)
  if (!hook) {
    return
  }

  let { title, excerpt: description, slug } = hook

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${DOMAIN}/docs/hooks/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
