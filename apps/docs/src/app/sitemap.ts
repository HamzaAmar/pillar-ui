import type { MetadataRoute } from 'next'
import { getComponents, getFeatures, getGetStarted, getHooks, getThemes, getTutorials, getUtils } from '~/api/docs'
import { DOMAIN } from '~/constant/domain'

const NOW = new Date().toISOString().split('T')[0]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let components = getComponents().map(({ slug, lastModified }) => ({
    url: `${DOMAIN}/docs/components/${slug}`,
    lastModified: lastModified,
    priority: 0.9,
    changefreq: 'daily',
  }))
  let features = getFeatures().map(({ slug, lastModified }) => ({
    url: `${DOMAIN}/docs/features/${slug}`,
    lastModified: lastModified,
    priority: 0.9,
    changefreq: 'daily',
  }))
  let themes = getThemes().map(({ slug, lastModified }) => ({
    url: `${DOMAIN}/docs/themes/${slug}`,
    lastModified: lastModified,
    priority: 0.9,
    changefreq: 'daily',
  }))

  let hooks = getHooks().map(({ slug, lastModified }) => ({
    url: `${DOMAIN}/docs/hooks/${slug}`,
    lastModified: lastModified,
    priority: 0.9,
    changefreq: 'daily',
  }))

  let utils = getUtils().map(({ slug, lastModified }) => ({
    url: `${DOMAIN}/docs/utils/${slug}`,
    lastModified: lastModified,
    priority: 0.9,
    changefreq: 'daily',
  }))

  let tutorials = getTutorials().map(({ slug, lastModified }) => ({
    url: `${DOMAIN}/docs/tutorials/${slug}`,
    lastModified: lastModified,
    priority: 0.9,
    changefreq: 'daily',
  }))
  let started = getGetStarted().map(({ slug, lastModified }) => ({
    url: `${DOMAIN}/docs/getting-started/${slug}`,
    lastModified: lastModified,
    priority: 0.9,
    changefreq: 'daily',
  }))

  // let routes = PAGES.map((page) => ({
  //   url: `${DOMAIN}${page}`,
  //   lastModified: NOW,
  //   priority: 0.8,
  //   changefreq: 'monthly',
  // }))

  const home = {
    url: `${DOMAIN}`,
    lastModified: NOW,
    priority: 1,
    changefreq: 'monthly',
  }

  const alls = [...components, ...features, ...themes, ...utils, ...hooks, ...started, ...tutorials]

  return [home, ...(alls || [])]
}
