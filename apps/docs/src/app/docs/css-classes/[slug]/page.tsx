import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getClassBySlug, getClasses } from '~/api/docs'
import { CustomMDX, TableOfContent } from '~/app/_components'
import { Ads } from '~/app/_components/ads'
import { DOMAIN } from '~/constant/domain'
import { SlugParamsProps } from '~/types/params'

export async function generateStaticParams() {
  return getClasses().map(({ slug }) => ({
    slug,
  }))
}

function Classes({ params }: SlugParamsProps) {
  const cls = getClassBySlug(params.slug)
  if (!cls) notFound()
  const { content, headings } = cls
  return (
    <>
      <div>
        <Ads />
        <div className="section docs--content prose">
          <div className="Sf-6">
            <CustomMDX source={content} />
          </div>
        </div>
      </div>

      {<TableOfContent contents={headings} />}
    </>
  )
}

export default Classes

export async function generateMetadata({ params }: SlugParamsProps): Promise<Metadata | undefined> {
  const cls = getClassBySlug(params.slug)
  if (!cls) {
    return
  }

  let { title, excerpt: description, slug } = cls

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${DOMAIN}/docs/clss/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@pillar_ui',
    },
  }
}
