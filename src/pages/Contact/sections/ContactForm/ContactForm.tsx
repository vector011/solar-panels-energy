import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Image, Text } from 'ui'
import { Form } from 'components'

import * as S from './styled'

const ContactForm = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box as="header" mb="5xl">
        <Text as="h1" variant="heading1" mb="l">
          {t('contact:contactForm.title')}
        </Text>

        <Text variant="subheading">{t('contact:contactForm.subtitle')}</Text>
      </Box>

      <Box as="article" equal gap="3xl" desktop={{ flexDirection: 'row' }}>
        <Form subject={t('contact:contactForm.subject')} />

        <Image
          src="images/map.svg"
          alt={t('contact:contactForm.image.alt')!}
          width={760}
          height={374}
          css={S.responsiveImage}
        />
      </Box>
    </>
  )
}

export default React.memo(ContactForm)
