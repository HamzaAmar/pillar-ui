import { CustomMDX } from '~/app/_components/mdx/mdx'
import { getThemeBySlug, getThemes } from '~/api/docs'
import { notFound } from 'next/navigation'
import { SlugParamsProps } from '~/types/params'
import { Metadata } from 'next'
import { DOMAIN } from '~/constant/domain'
import { TableOfContent } from '~/app/_components'

interface Props {
  slug: string
}
export async function generateStaticParams() {
  return getThemes().map(({ slug }) => ({
    slug,
  }))
}

function Themes({ params }: SlugParamsProps) {
  const theme = getThemeBySlug(params.slug)
  if (!theme) notFound()
  const { content, headings } = theme

  return (
    <>
      <div className="section docs--content prose l_f-md">
        <CustomMDX source={content} />
      </div>

      {<TableOfContent contents={headings} />}
    </>
  )
}

export default Themes

export async function generateMetadata({ params }: SlugParamsProps): Promise<Metadata | undefined> {
  const theme = getThemeBySlug(params.slug)
  if (!theme) {
    return
  }

  let { title, excerpt: description, slug } = theme

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${DOMAIN}/docs/themes/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
