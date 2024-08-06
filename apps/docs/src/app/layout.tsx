import { Metadata, Viewport } from 'next'
import { DOMAIN } from '~/constant/domain'
import { Footer, Header, NextThemeProvider } from './_components'
import type { ReactNode } from 'react'
// import '@pillar-ui/core/main.css'
import '../scss/main.scss'
import { DrawerProvider } from './_components/drawerProvider'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <DrawerProvider>
          <NextThemeProvider>
            <Header />
            <main className="l_flex-1">{children}</main>
            <Footer />
          </NextThemeProvider>
        </DrawerProvider>
      </body>
    </html>
  )
}

export default Layout

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: 'Pillar UI library',
    template: '%s | Pillar UI library',
  },
  description:
    'Pillar UI: A modern, accessible React component library for building beautiful, customizable, and lightning-fast web apps.',
  keywords: [
    'TypeScript',
    'React',
    'Hooks Library',
    'Utils Library',
    'Icons Library',
    'Accessibility',
    'React Component Library',
    'Design System',
    'UI library',
    'Pillar UI',
    'react design system',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Pillar UI library',
    description:
      'Pillar UI: A modern, accessible React component library for building beautiful, customizable, and lightning-fast web apps.',
    url: DOMAIN,
    siteName: 'Pillar UI library',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    title: 'Pillar UI library',
    card: 'summary_large_image',
    site: '@pillar_ui',
    creator: 'Hamza Miloud Amar',
  },
}

export const viewport: Viewport = {
  themeColor: '#3e63dd',
}
