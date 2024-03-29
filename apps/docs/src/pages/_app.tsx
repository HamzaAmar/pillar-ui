import React from 'react'
import type { AppProps } from 'next/app'
import '@pillar-ui/core/main.css'
import '../scss/main.scss'
import '../scss/theme.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
