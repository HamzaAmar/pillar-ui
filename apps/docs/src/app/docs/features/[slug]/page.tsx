import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getFeatureBySlug, getFeatures } from '~/api/docs'
import { CustomMDX, TableOfContent } from '~/app/_components'
import { DOMAIN } from '~/constant/domain'
import { SlugParamsProps } from '~/types/params'

export async function generateStaticParams() {
  return getFeatures().map(({ slug }) => ({
    slug,
  }))
}

function Features({ params }: SlugParamsProps) {
  const feature = getFeatureBySlug(params.slug)
  if (!feature) notFound()
  const { content, headings } = feature
  return (
    <>
      <div className="section docs--content  prose l_f-md">
        <CustomMDX source={content} />
      </div>

      {<TableOfContent contents={headings} />}
    </>
  )
}

export default Features

export async function generateMetadata({ params }: SlugParamsProps): Promise<Metadata | undefined> {
  const feature = getFeatureBySlug(params.slug)
  if (!feature) {
    return
  }

  let { title, excerpt: description, slug } = feature

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${DOMAIN}/docs/features/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
