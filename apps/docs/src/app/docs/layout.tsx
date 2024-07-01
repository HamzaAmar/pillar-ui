import { ReactNode } from 'react'
import { MenuBar } from '../_components'
import { getAll } from '~/api/docs'

interface DocsLayoutProps {
  children: ReactNode
  headings: any
}
const Layout = ({ children }: DocsLayoutProps) => {
  const data = getAll()
  return (
    <div className="docs--section">
      <MenuBar data={data} />
      {children}
    </div>
  )
}

export default Layout
