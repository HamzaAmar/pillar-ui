import { Metadata, Viewport } from 'next'
import { DOMAIN } from '~/constant/domain'
import { Footer, Header, NextThemeProvider } from './_components'
import type { ReactNode } from 'react'
import '../scss/main.scss'
// import '@docsearch/css'
import { DrawerProvider } from './_components/drawerProvider'
// import Head from 'next/head'
// import { SEARCH_APP_ID } from '~/constant/algolia'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="preconnect" href={`https://${SEARCH_APP_ID}-dsn.algolia.net`} crossOrigin="anonymous" />
      </Head> */}
      <body>
        <DrawerProvider>
          <NextThemeProvider>
            <Header />
            <main className="fl-1">{children}</main>
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
    template: '%s | Pillar UI - Lightweight React UI Library',
  },
  description:
    'Pillar UI: Lightweight and Accessible React UI Library for Building Beautiful, Customizable Web Applications',
  keywords: [
    'TypeScript',
    'Next.js',
    'React',
    'Hooks Library',
    'Utils Library',
    'Icons Library',
    'Accessibility',
    'React Component Library',
    'Design System',
    'UI library',
    'React UI library',
    'Pillar UI',
    'UI Design System',
    'react design system',
    'Server Components',
  ],

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/manifest.json',
  creator: 'Hamza Miloud Amar',
  authors: [
    {
      name: 'Hamza Miloud Amar',
      url: 'https://www.miloudamar.com/',
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Pillar UI library',
    description:
      'Pillar UI: Lightweight and Accessible React UI Library for Building Beautiful, Customizable Web Applications',
    url: DOMAIN,
    siteName: 'Pillar UI library',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${DOMAIN}/pillar.png`,
        width: 1024,
        height: 576,
        alt: 'Pillar UI a Lightweight and Accessible React UI Library',
      },
    ],
  },

  alternates: {
    canonical: DOMAIN,
  },

  twitter: {
    title: 'Pillar UI library',
    card: 'summary_large_image',
    site: '@pillar_ui',
    creator: 'Hamza Miloud Amar',
    images: [`${DOMAIN}/pillar.png`],
  },
}

export const viewport: Viewport = {
  themeColor: '#3e63dd',
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
}
