import { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '~/styles'

const Document = () => (
  <Html>
    <Head>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#0A0A0A" />
      <meta name="robots" content="index, follow" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

      {/* Icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/assets/favicons/safari-pinned-tab.svg"
        color="#7cb245"
      />

      <link rel="shortcut icon" href="assets/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#f6f6f6" />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="JP Green Energy" />
      <meta property="og:title" content="JP Green Energy, s.r.o." />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="JP Green Energy, s.r.o." />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
