import { CustomMDX } from '~/app/_components/mdx/mdx'
import { getThemeBySlug, getThemes, getTutorialBySlug, getTutorials } from '~/api/docs'
import { SlugParamsProps } from '~/types/params'
import { Metadata } from 'next'
import { DOMAIN } from '~/constant/domain'
import { notFound } from 'next/navigation'
import { TableOfContent } from '~/app/_components'

interface Props {
  slug: string
}
export async function generateStaticParams() {
  return getTutorials().map(({ slug }) => ({
    slug,
  }))
}

function Tutorial({ params }: SlugParamsProps) {
  const tutorial = getTutorialBySlug(params.slug)
  if (!tutorial) notFound()
  const { content, headings } = tutorial

  return (
    <>
      <div className="section prose l_flow__md">
        <CustomMDX source={content} />
      </div>

      {<TableOfContent contents={headings} />}
    </>
  )
}

export default Tutorial

export async function generateMetadata({ params }: SlugParamsProps): Promise<Metadata | undefined> {
  const tutorial = getThemeBySlug(params.slug)
  if (!tutorial) {
    return
  }

  let { title, excerpt: description, slug } = tutorial

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${DOMAIN}/docs/tutorials/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
