import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Image, Text } from 'ui'

import * as S from './styled'

const Description = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box as="header" mb="l">
        <Text as="h1" variant="heading1">
          {t('aboutUs:description.title')}
        </Text>
      </Box>

      <Box as="article" equal gap="3xl" largeDesktop={{ flexDirection: 'row' }}>
        <Text css={S.pre}>{t('aboutUs:description.body')}</Text>

        <Image
          src="images/about-us.jpg"
          alt={t('aboutUs:description.image.alt')!}
          width={782}
          height={474}
          css={S.responsiveImage}
        />
      </Box>
    </>
  )
}

export default React.memo(Description)
