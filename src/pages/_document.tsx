import { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '~/styles'

const Document = () => (
  <Html lang="en">
    <Head>
      <meta
        name="description"
        content="Prinášame alternatívne ekologické zdroje elektrickej energie. Dodávame technológie pre výrobu zelenej elektrickej energie, príslušenstvo a služby."
      />

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

      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="JP Green Energy" />
      <meta property="og:title" content="JP Green Energy, s.r.o." />
      <meta
        property="og:description"
        content="Prinášame alternatívne ekologické zdroje elektrickej energie. Dodávame technológie pre výrobu zelenej elektrickej energie, príslušenstvo a služby."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jpenergy.eu" />
      <meta
        property="og:image"
        content="https://jpenergy.eu/assets/thumbnail.jpeg"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jpenergy.eu" />
      <meta property="twitter:title" content="JP Green Energy, s.r.o." />
      <meta
        property="twitter:description"
        content="Prinášame alternatívne ekologické zdroje elektrickej energie. Dodávame technológie pre výrobu zelenej elektrickej energie, príslušenstvo a služby."
      />
      <meta
        property="twitter:image"
        content="https://jpenergy.eu/assets/thumbnail.jpeg"
      />
    </Head>

    <body className="sd">
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
