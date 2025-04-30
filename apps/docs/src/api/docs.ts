import fs from 'fs'
import path from 'path'
import { parse } from 'yaml'
import readingTime from 'reading-time'
import { Component, Class, GettingStarted, Headings, Hook, Theme, Tutorial, Util } from '~/types/docs'
import { toSlug } from '~/utils/slug'

function extractTOCFromMDX(content: string): Headings {
  const toc: Headings = []
  const headingRegex = /^#{2,4}\s+(.*)$/gm
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const [heading, value] = match
    const title = value.trim()
    const level = heading.startsWith('####') ? 4 : heading.startsWith('###') ? 3 : 2
    const slug = toSlug(title)
    toc.push({ level, title, slug })
  }

  return toc
}

function parseFrontmatter<T>(fileContent: string, filename: string) {
  // Split the file content into frontmatter and content

  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontmatter = parse(frontMatterBlock)
  const slug = filename
  const stats = readingTime(content)
  const headings = extractTOCFromMDX(content)

  return {
    ...frontmatter,
    readingTime: stats,
    slug,
    content,
    headings,
  } as T
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile<T>(filePath: string, filename: string) {
  let fileContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter<T>(fileContent, filename)
}

function getMDXData<T>(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    const [filename] = file.split('.')

    let obj = readMDXFile<T>(path.join(dir, file), filename)
    return obj
  })
}

export function getComponents() {
  return getMDXData<Component>(path.join(process.cwd(), 'content/components'))
}

export function getComponentBySlug(s: string) {
  return getComponents().find(({ slug }) => slug === s)
}

export function getUtils() {
  return getMDXData<Util>(path.join(process.cwd(), 'content/utils'))
}

export function getUtilBySlug(s: string) {
  return getUtils().find(({ slug }) => slug === s)
}

export function getGetStarted() {
  return getMDXData<GettingStarted>(path.join(process.cwd(), 'content/getting-started'))
}

export function getGetStartedBySlug(s: string) {
  return getGetStarted().find(({ slug }) => slug === s)
}

export function getHooks() {
  return getMDXData<Hook>(path.join(process.cwd(), 'content/hooks'))
}

export function getHookBySlug(s: string) {
  return getHooks().find(({ slug }) => slug === s)
}

export function getThemes() {
  return getMDXData<Theme>(path.join(process.cwd(), 'content/themes'))
}

export function getThemeBySlug(s: string) {
  return getThemes().find(({ slug }) => slug === s)
}

export function getTutorials() {
  return getMDXData<Tutorial>(path.join(process.cwd(), 'content/tutorials'))
}

export function getTutorialBySlug(s: string) {
  return getTutorials().find(({ slug }) => slug === s)
}

export function getClasses() {
  return getMDXData<Class>(path.join(process.cwd(), 'content/css-classes'))
}

export function getClassBySlug(s: string) {
  return getClasses().find(({ slug }) => slug === s)
}

export function getAll() {
  const getStarted = getGetStarted()
  const components = getComponents()
  const hooks = getHooks()
  const classes = getClasses()
  const utils = getUtils()
  const tutorials = getTutorials()
  const themes = getThemes()

  return {
    'getting-started': getStarted,
    themes,
    'css-classes': classes,
    components,
    hooks,
    utils,
    tutorials,
  }
}
