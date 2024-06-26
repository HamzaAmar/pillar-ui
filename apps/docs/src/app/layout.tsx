import { Metadata } from 'next'
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
    'Frontend Developer & Creator of Pillar UI | Passionate about building elegant, accessible, and UX-friendly Design Systems with React | React, Next,CSS,Remix',

  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Pillar UI library',
    description:
      'Frontend Developer & Creator of Pillar UI | Passionate about building elegant, accessible, and UX-friendly Design Systems with React | React, Next,CSS,Remix',
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
