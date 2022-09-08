import React from 'react'

import { Box, Image, Text } from 'ui'
import { List } from 'components'

import * as S from './styled'

const Portfolio = () => (
  <>
    <Image
      css={S.responsiveImage}
      src="images/solar-panel-2.png"
      alt="Fotovoltaické panely"
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
        Solar portfolio
      </Text>

      <List
        items={[
          'Operatívna komunikácia pri výbere zariadení',
          'Rýchly nákup bez potreby registrácie',
          'Rýchle dodanie tovaru',
          'Dlhodobá záruka na všetky produkty',
          'Produkty k dispozicii v showroome',
        ]}
      />
    </Box>
  </>
)

export default React.memo(Portfolio)
