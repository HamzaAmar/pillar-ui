import React from 'react'
import type { AppProps } from 'next/app'
import '@pillar/core/main.min.css'
import '../scss/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
