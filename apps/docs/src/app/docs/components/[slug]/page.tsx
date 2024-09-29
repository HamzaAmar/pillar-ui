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
  const { content, headings, lastModified, publishedAt, title, ...rest } = component
  const img = `${DOMAIN}/pillar.png`
  const directory = component.type === 'core' ? 'components' : component.type
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            headline: component.title,
            datePublished: publishedAt,
            dateModified: lastModified,
            description: component.excerpt,
            image: img,
            codeRepository: '',
            url: `${DOMAIN}/docs/${directory}/${component.slug}`,
            author: {
              '@type': 'Organization',
              name: 'Pillar UI',
              url: 'https://www.pillar-ui.com/',
            },
          }),
        }}
      />
      <div className="docs--content">
        <DocHeader root="pillar-core/src/core" title={title} {...rest} />
        <div className="section prose Sf5">
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
  if (!post) return {}

  let { title, excerpt: description, slug, lastModified, publishedAt } = post
  const img = `${DOMAIN}/assets/favicon/logo-512X512.png`
  return {
    title,
    description,
    other: {
      'article:modified_time': lastModified,
    },

    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: publishedAt,
      url: `${DOMAIN}/blogs/${slug}`,

      images: [
        {
          url: img,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [img],
      creator: '@pillar_ui',
    },
  }
}
