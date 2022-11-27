import { getRoute } from 'config/router'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { To, useNavigate } from 'react-router'

import { Box, Button, Image, Light, Text } from 'ui'

import * as S from './styled'

const Header = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const navigateTo = useCallback((to: To) => () => navigate(to), [navigate])

  return (
    <>
      <Box as="article" zIndex="1">
        <Text
          as="h1"
          variant="heading1"
          mb="s"
          tablet={{ mb: 'm' }}
          desktop={{ mb: 'l' }}
        >
          {t('solarEnergy:header.title')}
        </Text>

        <Text
          mb="l"
          tablet={{ mb: 'xxl' }}
          desktop={{ mb: '4xl', maxw: '70%' }}
        >
          {t('solarEnergy:header.body')}
        </Text>

        <Box
          row
          css={S.responsiveButtons}
          flexWrap
          gap="m"
          desktop={{ gap: 'xl' }}
        >
          <Button onClick={navigateTo(getRoute('products'))}>
            {t('global:navigation.products')}
          </Button>

          <Button onClick={navigateTo(getRoute('services'))} secondary>
            {t('global:navigation.services')}
          </Button>
        </Box>
      </Box>

      <Box css={S.responsiveImage} position="relative" pt="5xl" zIndex="0">
        <Image
          src="images/solar-panel-1.png"
          alt={t('solarEnergy:header.image.alt')!}
          width={984}
          height={566}
        />

        <Light bg="secondary" size={522} bottom={-240} right={-177} />
      </Box>
    </>
  )
}

export default React.memo(Header)
