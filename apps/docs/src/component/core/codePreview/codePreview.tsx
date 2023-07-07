// import React from 'react'
// import { CodePreviewProps } from './codePreview.type'
// import { Flex, Paper } from '@pillar/core'
// import type { Highlighter, Lang, Theme } from 'shiki'
// import { renderToHtml, getHighlighter } from 'shiki'

// let highlighter: Highlighter
// export async function highlight(code: string, theme: Theme, lang: Lang) {
//   if (!highlighter) {
//     highlighter = await getHighlighter({
//       langs: [lang],
//       theme: theme,
//     })
//   }

//   const tokens = highlighter.codeToThemedTokens(code, lang, theme, {
//     includeExplanation: false,
//   })
//   const html = renderToHtml(tokens, { bg: 'transparent' })

//   return html
// }

// const codePreview = ({ children }: CodePreviewProps) => {
//   return (
//     <Paper as={Flex} gap="md" wrap items="center" justify="center" borderColor="opacity-7" padding="sm" corner="sm">
//       {children}
//     </Paper>
//   )
// }

// export default codePreview

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as shiki from 'shiki'

interface CodePreviewProps {
  children: string
  language: string
}

export const CodePreview: React.FC<CodePreviewProps> = () => {
  const ref = useRef<HTMLDivElement>(null)
  const theme = require('shiki/themes/github-light.json')

  useEffect(() => {
    const code = `
    console.log('Hello world');
    const a = 0;
    const b = 2;
    const result = a + b + a;
    console.log(result);
  `
    shiki.getHighlighter({ theme }).then((highlighter) => {
      highlighter.codeToHtml(code, 'tsx')
    })
  }, [theme])

  return <div ref={ref}>Hello world</div>
}

// export const ContentLayerCodePreview: React.FC<CodePreviewProps> = ({ children, language }) => {}
