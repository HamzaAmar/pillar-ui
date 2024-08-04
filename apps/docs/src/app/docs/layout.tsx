import { ReactNode } from 'react'
import { MenuBar } from '../_components'
import { getAll } from '~/api/docs'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  const data = getAll()
  return (
    <div className="docs--section">
      <MenuBar data={data} />
      {children}
    </div>
  )
}

export default Layout
