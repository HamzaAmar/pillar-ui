import { CustomMDX } from '~/app/_components/mdx'
import { getComponentBySlug, getComponents } from '~/api/docs'
import { Metadata } from 'next'
import { DOMAIN } from '~/constant/domain'
import { notFound } from 'next/navigation'
import { SlugParamsProps } from '~/types/params'
import { DocHeader, TableOfContent } from '~/app/_components'
import { Flex, Link, Paper, Text } from '@pillar-ui/core'
import DocNavigate from '~/app/_components/docNavigate'
import { Ads } from '~/app/_components/ads'

export async function generateStaticParams() {
  return getComponents().map(({ slug }) => ({
    slug,
  }))
}

function Page({ params }: SlugParamsProps) {
  const components = getComponents()
  // const component = getComponents().find(({ slug }) => slug === params.slug)
  const index = components.findIndex(({ slug }) => slug === params.slug)
  const [prev, cur, next] =
    index >= 0
      ? [
          components[index - 1] || null, // prev
          components[index], // current
          components[index + 1] || null, // next
        ]
      : [null, null, null]

  if (!cur) notFound()

  const { content, headings, lastModified, publishedAt, title, ...rest } = cur
  const img = `${DOMAIN}/pillar.png`
  const directory = cur.type === 'core' ? 'components' : cur.type
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            headline: cur.title,
            datePublished: publishedAt,
            dateModified: lastModified,
            description: cur.excerpt,
            image: img,
            codeRepository: '',
            url: `${DOMAIN}/docs/${directory}/${cur.slug}`,
            author: {
              '@type': 'Organization',
              name: 'Pillar UI',
              url: 'https://www.pillar-ui.com/',
            },
          }),
        }}
      />
      <div id="doc-content" className="docs--content">
        <div>
          <DocHeader root="pillar-core/src/core" title={title} {...rest} />
          <Ads />
        </div>
        <div className="section prose Sf-6">
          <CustomMDX source={content} />
          <Flex as={Paper} mt="9" gap="4" justify="between" items="center" wrap>
            <DocNavigate title={prev?.title} slug={prev?.slug} to="previous" />
            <DocNavigate title={next?.title} slug={next?.slug} to="next" />
          </Flex>
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
