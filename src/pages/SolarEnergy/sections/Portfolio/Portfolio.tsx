import React from 'react'

import { Box, Image, Text } from 'ui'
import { List } from 'components'

import * as S from './styled'

type Props = {}

const Portfolio = ({}: Props) => (
  <>
    <Image
      src="images/solar-panel-2.png"
      alt="Solárne panely"
      loading="lazy"
      width={779}
      height={470}
    />

    <Box>
      <Text as="h2" variant="heading2" mb="4xl">
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
