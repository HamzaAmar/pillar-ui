import * as dotenv from 'dotenv'
import fs from 'fs'
import { dirname, join, extname } from 'path'
import { parse } from 'yaml'
import { algoliasearch } from 'algoliasearch'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const contentDIR = join(__dirname, '..', 'content')
dotenv.config({ path: join(__dirname, '../.env.local') })

const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY)

function toSlug(str) {
  if (str === 'useDirection') {
  }
  if (!str || str.trim().length === 0) return ''
  return str
    .toLowerCase()
    .trim()
    .replace(/ & /g, ' and ')
    .replace(/[ ]+/g, '-')
    .replace(/[-]+/g, '-') // Replace consecutive hyphens with a single hyphen
    .replace(/[^a-z0-9-]+/g, '') // Remove non-alphanumeric characters
    .replace(/^-|-$/g, '')
}

function extractTOCFromMDX(content) {
  const toc = []
  const headingRegex = /^#{2,4}\s+(.*)$/gm
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const [_, value] = match
    const title = value.trim()
    const slug = toSlug(title)
    toc.push(slug)
  }

  return toc
}

function parseFrontmatter(fileContent, filename) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match[1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontmatter = parse(frontMatterBlock)
  const { type, title, excerpt, items = [] } = frontmatter
  // const strItems = JSON.stringify(items)
  const slug = filename
  const headings = extractTOCFromMDX(content)
  return {
    objectID: `${type}_${slug}`,
    title,
    type,
    excerpt,
    items,
    slug,
    headings,
  }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => extname(file) === '.mdx')
}

function readMDXFile(filePath, fileName) {
  let fileContent = fs.readFileSync(filePath, 'utf-8')
  const [filename] = fileName.split('.')
  return parseFrontmatter(fileContent, filename)
}

async function indexData() {
  const contentTypes = ['components', 'hooks', 'utils', 'features', 'themes']
  const records = []

  for (const type of contentTypes) {
    const folderPath = join(contentDIR, type)
    const files = getMDXFiles(folderPath)

    for (const file of files) {
      const filePath = join(folderPath, file)
      const record = readMDXFile(filePath, file)
      records.push(record)
    }
  }

  try {
    const result = await client.saveObjects({ indexName: 'docs', objects: records })
    console.log(`records added with success`)
  } catch (error) {
    console.error('Error indexing data:', error)
  }
}

// indexData()
console.log(indexData())
