import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Text } from 'ui'

import * as S from './styled'

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text
        as="h2"
        variant="heading2"
        mb="s"
        tablet={{ mb: 'm' }}
        desktop={{ maxw: '20ch', mb: 'l' }}
      >
        {t('solarEnergy:aboutUs.title')}
      </Text>

      <Box as="article" desktop={{ row: true }} gap="m" equal>
        <Box>
          <Text as="h3" variant="subheading" desktop={{ maxw: '70%' }}></Text>
        </Box>

        <Text css={S.pre}>{t('solarEnergy:aboutUs.body')}</Text>
      </Box>
    </>
  )
}

export default React.memo(AboutUs)
