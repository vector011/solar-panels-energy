import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Text } from 'ui'
import { Form } from 'components'
import { MAP_SRC } from 'constants/global'

import * as S from './styled'

const ContactForm = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box as="header">
        <Text as="h1" variant="heading1" mb="l">
          {t('contact:contactForm.title')}
        </Text>
      </Box>

      <Box as="article" equal gap="3xl" desktop={{ flexDirection: 'row' }}>
        <Box>
          <Text variant="subheading" mb="5xl">
            {t('contact:contactForm.subtitle')}
          </Text>

          <Form subject={t('contact:contactForm.subject')} />
        </Box>

        <S.Map
          width={600}
          height={400}
          src={MAP_SRC}
          frameBorder="0"
          scrolling="no"
        />

        {/* <Image
          src="images/map.svg"
          alt={t('contact:contactForm.image.alt')!}
          width={901}
          height={603}
          css={S.responsiveImage}
        /> */}
      </Box>
    </>
  )
}

export default React.memo(ContactForm)
