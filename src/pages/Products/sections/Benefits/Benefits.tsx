import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Light, Text } from 'ui'
import { List } from 'components'

const Benefits = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box
        as="header"
        mb="5xl"
        tablet={{ mb: '7xl' }}
        desktop={{ mb: 'block' }}
      >
        <Text
          as="h1"
          variant="heading1"
          mb="s"
          tablet={{ mb: 'm' }}
          desktop={{ mb: 'l' }}
        >
          {t('products:benefits.title')}
        </Text>

        <Text>{t('products:benefits.body')}</Text>
      </Box>

      <Box as="article">
        <Text as="h2" variant="heading2" mb="3xl" tablet={{ mb: '4xl' }}>
          {t('products:benefits.subtitle')}
        </Text>

        <Box largeDesktop={{ maxw: '75%' }} maxw="100%">
          <List
            items={
              t('products:benefits.list', { returnObjects: true }) as string[]
            }
          />
        </Box>
      </Box>

      <Light bg="secondary" size={522} bottom={32} right={-296} />
    </>
  )
}

export default React.memo(Benefits)
