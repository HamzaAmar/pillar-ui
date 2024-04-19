import { ejectModeClassName } from '@pillar-ui/utils'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content={`${process.env.NEXT_PUBLIC_G_SITE_VERIFICATION}`} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <link rel="icon" href="/favicon.png" sizes="16" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <body className="custom-scroll">
        <script dangerouslySetInnerHTML={{ __html: `${ejectModeClassName()}` }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
