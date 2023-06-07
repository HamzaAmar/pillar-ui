import React from 'react'
import type { AppProps } from 'next/app'
import { useTheme } from '@pillar/core'
import '@pillar/core/main.min.css'
import '../scss/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  useTheme()
  return <Component {...pageProps} />
}
