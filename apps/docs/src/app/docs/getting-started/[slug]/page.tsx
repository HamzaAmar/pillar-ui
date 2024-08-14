import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'
import { getGetStarted, getGetStartedBySlug } from '~/api/docs'
import { TableOfContent } from '~/app/_components'
import { CustomMDX } from '~/app/_components/mdx/mdx'
import { DOMAIN } from '~/constant/domain'
import { SlugParamsProps } from '~/types/params'

export async function generateStaticParams() {
  return getGetStarted().map(({ slug }) => ({
    slug,
  }))
}

function GettingStarted({ params }: SlugParamsProps) {
  const feature = getGetStartedBySlug(params.slug)
  if (!feature) notFound()
  const { content, headings, ...rest } = feature
  return (
    <>
      <div className="section docs--content prose l_f-md">
        <CustomMDX source={content} />
      </div>

      {<TableOfContent contents={headings} />}
    </>
  )
}

export default GettingStarted

export async function generateMetadata({ params }: SlugParamsProps): Promise<Metadata | undefined> {
  const getStarted = getGetStartedBySlug(params.slug)
  if (!getStarted) {
    return
  }

  let { title, excerpt: description, slug } = getStarted

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${DOMAIN}/docs/getting-started/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
