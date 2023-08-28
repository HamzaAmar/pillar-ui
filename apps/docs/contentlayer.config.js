import { defineDocumentType, makeSource, defineNestedType } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import GithubSlugger from 'github-slugger'

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw),
  },
  headings: {
    type: 'json',
    resolve: async (doc) => {
      const headingsRegex = /\n(?<flag>#{2,6})\s+(?<content>.+)/g
      const slugger = new GithubSlugger()
      const headings = Array.from(doc.body.raw.matchAll(headingsRegex)).map(({ groups }) => {
        const flag = groups?.flag
        const content = groups?.content
        return {
          level: flag.length,
          text: content,
          slug: content ? slugger.slug(content) : null,
        }
      })

      return headings
    },
  },
}

export const Components = defineDocumentType(() => ({
  name: 'Components',
  filePathPattern: `components/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    items: {
      type: 'list',
      of: { type: 'string' },
    },
    file: {
      type: 'string',
      description: 'The directory that handles the import of the component',
      required: true,
    },
    root: {
      type: 'string',
      description: 'The summary url for every doc',
      required: true,
    },
  },
  computedFields,
}))

// export const Features = defineDocumentType(() => ({
//   name: 'Features',
//   filePathPattern: `features/*.mdx`,
//   contentType: 'mdx',
//   fields: {
//     title: {
//       type: 'string',
//       description: 'The title of the post',
//       required: true,
//     },
//     excerpt: {
//       type: 'string',
//       description: 'The summary of the post',
//       required: true,
//     },
//     file: {
//       type: 'string',
//       description: 'The directory that handles the import of the component',
//       required: true,
//     },
//     root: {
//       type: 'string',
//       description: 'The summary url for every doc',
//       required: true,
//     },
//   },
//   computedFields,
// }))

export const Hooks = defineDocumentType(() => ({
  name: 'Hooks',
  filePathPattern: `hooks/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    file: {
      type: 'string',
      description: 'The directory that handles the import of the hook.',
      required: true,
    },
    root: {
      type: 'string',
      description: 'The summary url for every doc',
      required: true,
    },
  },
  computedFields,
}))

export const Utils = defineDocumentType(() => ({
  name: 'Utils',
  filePathPattern: `utils/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    file: {
      type: 'string',
      description: 'The directory that handles the import of the hook.',
      required: true,
    },
    root: {
      type: 'string',
      description: 'The summary url for every doc',
      required: true,
    },
  },
  computedFields,
}))

export const Themes = defineDocumentType(() => ({
  name: 'Theme',
  filePathPattern: `theme/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    root: {
      type: 'string',
      description: 'The summary url for every doc',
      required: true,
    },
  },
  computedFields,
}))

export const GetStarted = defineDocumentType(() => ({
  name: 'GettingStarted',
  filePathPattern: `getStarted/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    root: {
      type: 'string',
      description: 'The summary url for every doc',
      required: true,
    },
  },
  computedFields,
}))

export const Features = defineDocumentType(() => ({
  name: 'Features',
  filePathPattern: `features/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    root: {
      type: 'string',
      description: 'The summary url for every doc',
      required: true,
    },
  },
  computedFields,
}))

export const Tutorials = defineDocumentType(() => ({
  name: 'Tutorials',
  filePathPattern: `tutorials/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    root: {
      type: 'string',
      description: 'The summary url for every doc',
      required: true,
    },
  },
  computedFields,
}))

const mdx = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypePrettyCode,
      {
        theme: {
          dark: 'slack-dark',
          light: 'github-light',
        },
        onVisitLine(node) {
          // Prevent lines from collapsing in `display: grid` mode, and allow empty
          // lines to be copy/pasted
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }]
          }
        },
        onVisitHighlightedLine(node) {
          node.properties.className.push('line--highlighted')
        },
        onVisitHighlightedWord(node) {
          node.properties.className = ['word--highlighted']
        },
      },
    ],
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ['subheading-anchor'],
        },
      },
    ],
  ],
}

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Components, Hooks, Utils, Themes, GetStarted, Features, Tutorials],
  mdx,
})
