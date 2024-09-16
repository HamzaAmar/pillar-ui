import React, { Children } from 'react'
import { CopyButton } from '../copyButton'
import { Paper } from '@pillar-ui/core'
import { highlight } from 'sugar-high'

interface DocsCodeProps {
  code: string
  codeHTML: string
}

interface CodePlaygroundProps {
  children: React.ReactNode
}

export const DocsCode = ({ code, codeHTML }: DocsCodeProps) => {
  return (
    <pre className="code--section">
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
      <CopyButton className="code--copy" text={code} />
    </pre>
  )
}

export const CodePlaygroundDocs = ({ children }: CodePlaygroundProps) => {
  const strCode = ''
  return (
    <section>
      <Paper className="playground" border flow="sm" p="sm" background="bg-3" corner="sm">
        {children}
      </Paper>

      <DocsCode code={strCode} codeHTML={strCode} />
    </section>
  )
}
