import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Text } from 'ui'

import * as S from './styled'

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <Box as="article" largeDesktop={{ row: true }} gap="m" equal>
      <Text
        as="h2"
        mb="l"
        variant="heading2"
        maxWidth="20ch"
        largeDesktop={{ mb: '0', minWidth: '53%' }}
      >
        {t('solarEnergy:aboutUs.title')}
      </Text>

      <Text css={S.pre} textAlign="justify">
        {t('solarEnergy:aboutUs.body')}
      </Text>
    </Box>
  )
}

export default React.memo(AboutUs)
