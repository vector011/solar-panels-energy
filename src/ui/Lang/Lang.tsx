import Link from 'next/link'
import { memo, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import SVG from 'react-inlinesvg'

import Box from '../Box'

const Lang = () => {
  const { t } = useTranslation()

  const { locale, locales, defaultLocale, asPath } = useRouter()

  const newLocale = useMemo(
    () =>
      (locale === locales?.[0] ? locales?.[1] : locales?.[0]) || defaultLocale,
    [locale, locales, defaultLocale]
  )

  return (
    <Box
      as={Link}
      href={asPath}
      locale={newLocale}
      aria-label="change language"
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <SVG
        src={`/assets/langs/${newLocale || ''}.svg`}
        title={t('global:button.lang', { lang: newLocale }) || ''}
        width={33}
        height={20}
      />
    </Box>
  )
}

export default memo(Lang)
