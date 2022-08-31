import React from 'react'

import { Box, Image, Text } from 'ui'
import { Form } from 'components'

import * as S from './styled'

const ContactForm = () => (
  <>
    <Box as="header" mb="5xl">
      <Text as="h1" variant="heading1" mb="l">
        S čím vám môžeme poradiť?
      </Text>

      <Text variant="subheading">
        V prípade Ďalších otázok nás neváhajte kontaktovať
      </Text>
    </Box>

    <Box as="article" equal row flexWrap alignItems="center" gap="3xl">
      <Form />

      <Image
        src="images/map.svg"
        alt="Mapa polohy"
        width={760}
        height={374}
        css={S.responsiveImage}
      />
    </Box>
  </>
)

export default React.memo(ContactForm)
