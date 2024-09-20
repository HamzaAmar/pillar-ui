import { CopyButton } from '../copyButton'
import { readExampleFile } from './readFile'
import { highlight } from 'sugar-high'
import dynamic from 'next/dynamic'

interface DocsCodeProps {
  code: string
  html: string
}

interface PreviewProps {
  root: string
  name: string
  direction?: 'column' | 'row'
}

export const DocsCode = ({ code, html }: DocsCodeProps) => {
  return (
    <div className="code--section">
      <div className="code--header">
        <div className="dot" />
        <CopyButton size="2xs" className="code--copy" text={code} />
      </div>

      <pre>
        <code dangerouslySetInnerHTML={{ __html: html }} />
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

  console.log(Component)

  return (
    <section className="l_f-sm">
      <div className={`playground playground-${direction}`}>
        <Component />
      </div>
      <div>
        <DocsCode code={content} html={html} />
      </div>
    </section>
  )
}
