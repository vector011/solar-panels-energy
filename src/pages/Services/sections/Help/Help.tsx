import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Light, Text } from 'ui'
import { List } from 'components'

const Help = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box as="header">
        <Text
          as="h1"
          variant="heading1"
          mb="s"
          tablet={{ mb: 'm' }}
          desktop={{ mb: 'l' }}
        >
          {t('services:help.title')}
        </Text>
      </Box>

      <Box largeDesktop={{ maxw: '75%' }} maxw="100%">
        <Text tablet={{ mb: '4xl' }} mb="3xl">
          {t('services:help.body')}
        </Text>

        <List
          items={t('services:help.list', { returnObjects: true }) as string[]}
        />
      </Box>

      <Light bg="secondary" size={522} bottom={-40} right={-177} />
    </>
  )
}

export default React.memo(Help)
