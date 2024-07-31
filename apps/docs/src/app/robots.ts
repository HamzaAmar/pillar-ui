import { DOMAIN } from '~/constant/domain'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${DOMAIN}/sitemap.xml`,
    host: `${DOMAIN}`,
  }
}
