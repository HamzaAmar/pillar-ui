import { CopyButton } from '../copyButton'
import { readExampleFile } from './readFile'
import { highlight } from 'sugar-high'
import dynamic from 'next/dynamic'
import type { DocsCodeProps, PreviewProps } from './code.type'

export const DocsCode = ({ code, html }: DocsCodeProps) => {
  return (
    <div className="code--section">
      <div className="code--header">
        <div className="dot" />
        <CopyButton size="2xs" className="code--copy" text={code} />
      </div>

      <pre className="doc-pre">
        <code className="doc-code" dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  )
}

export const Playground = async ({ name, root, direction = 'row' }: PreviewProps) => {
  const content = await readExampleFile(root, name)
  const html = highlight(content)
  const Component = dynamic(() =>
    import(`../playground/${root}/${name}.tsx`).then((mod) => {
      name = name[0].toUpperCase() + name.slice(1)
      return mod[name]
    })
  )

  return (
    <section className="l_f-sm">
      <div className={`playground playground-${direction}`}>
        <Component />
      </div>
      <DocsCode code={content} html={html} />
    </section>
  )
}
