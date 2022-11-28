import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Light, Text } from 'ui'

const Benefits = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box as="header">
        <Text as="h1" variant="heading1" mb="l">
          {t('products:benefits.title')}
        </Text>

        <Text>{t('products:benefits.body')}</Text>
      </Box>

      <Light bg="secondary" size={522} bottom={32} right={-296} />
    </>
  )
}

export default React.memo(Benefits)
