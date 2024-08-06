import type { ReadTimeResults } from 'reading-time'

export interface Heading {
  level: number
  title: string
  slug: string
}

export type Headings = Heading[]

export interface SharedDocs {
  title: string
  excerpt: string
  content: string
  slug: string
  type: 'core' | 'hooks' | 'utils' | 'tutorials' | 'getting-started' | 'features' | 'themes'
  readingTime: ReadTimeResults
  headings: Headings
  directory?: string
  lastModified: string
  publishedAt: string
}

export interface Component extends SharedDocs {
  items?: string[] | undefined
  file: string
}

export interface Feature extends SharedDocs {}

export interface GettingStarted extends SharedDocs {}

export interface Hook extends SharedDocs {
  file: string
}

export interface Theme extends SharedDocs {}

export interface Tutorial extends SharedDocs {}

export interface Util extends SharedDocs {
  file: string
}
