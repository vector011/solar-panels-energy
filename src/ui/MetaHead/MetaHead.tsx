import { memo } from 'react'
import Head from 'next/head'
import { type TFunction } from 'next-i18next'

import { TITLE } from '~/constants/global'

type TMetaHeadProps = {
  t: TFunction
  ns?: string
  lang?: string
  children?: React.ReactNode
}

const MetaHead = ({ t, ns, lang = 'sk', children }: TMetaHeadProps) => (
  <Head>
    {children}

    <title>{`${ns ? `${t(`global:navigation.${ns}`)} | ` : ''}${TITLE}`}</title>

    <link rel="manifest" href={`/${lang}.site.webmanifest`} />

    <meta name="description" content={t('global:meta.description') || ''} />

    {/* Open Graph / Facebook */}
    <meta
      property="og:url"
      content={`https://jpenergy.eu/${lang === 'sk' ? '' : lang}`}
    />
    <meta
      property="og:description"
      content={t('global:meta.description') || ''}
    />
    <meta
      property="og:image"
      content="https://jpenergy.eu/assets/thumbnail.jpeg"
    />

    {/* Twitter */}
    <meta
      property="twitter:url"
      content={`https://jpenergy.eu/${lang === 'sk' ? '' : lang}`}
    />
    <meta
      property="twitter:description"
      content={t('global:meta.description') || ''}
    />
    <meta
      property="twitter:image"
      content="https://jpenergy.eu/assets/thumbnail.jpeg"
    />
  </Head>
)

export default memo(MetaHead) as typeof MetaHead
