import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Image, Text } from 'ui'
import { List } from 'components'

import * as S from './styled'

const Portfolio = () => {
  const { t } = useTranslation()

  return (
    <>
      <Image
        css={S.responsiveImage}
        src="images/solar-panel-2.png"
        alt={t('solarEnergy:portfolio.image.alt')!}
        loading="lazy"
        width={779}
        height={470}
      />

      <Box width="100%" desktop={{ width: 'auto' }}>
        <Text
          as="h2"
          variant="heading2"
          mb="l"
          tablet={{ mb: '2xl' }}
          desktop={{ mb: '4xl' }}
        >
          {t('solarEnergy:portfolio.title')}
        </Text>

        <List
          items={
            t('solarEnergy:portfolio.list', { returnObjects: true }) as string[]
          }
        />
      </Box>
    </>
  )
}

export default React.memo(Portfolio)
