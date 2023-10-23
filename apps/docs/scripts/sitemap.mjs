import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

const docs = await globby(['content/**/*.mdx'])

const urlDocs = docs
  .map((file) => file.replace('pages', '').replace('content', '/docs').replace('.tsx', '').replace('.mdx', ''))
  .map((path) => (path === '/index' ? '/' : path))
  .map(
    (path) => `
      <url>
          <loc>http://pillar-ui.com${path}</loc>
      </url>
    `
  )
  .join('')

const pages = await globby(['src/pages/**/*.tsx', '!src/pages/docs/**/*.tsx', '!src/pages/_*.tsx'])

const urlPage = pages
  .map((file) => file.replace('src/pages', '').replace('content', '/docs').replace('.tsx', '').replace('.mdx', ''))
  .map((path) => (path === '/index' ? '/' : path))
  .map(
    (path) => `
      <url>
          <loc>http://pillar-ui.com${path}</loc>
      </url>
    `
  )
  .join('')

console.log(urlPage)

const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlPage} ${urlDocs}
  </urlset>
`

const prettierConfig = await prettier.resolveConfig('./prettierrc')
const formatted = prettier.format(sitemap, {
  ...prettierConfig,
  parser: 'html',
})

writeFileSync('public/sitemap.xml', formatted)
