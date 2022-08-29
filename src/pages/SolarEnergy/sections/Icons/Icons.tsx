import React from 'react'

import { Box, Icon, Text } from 'ui'

import * as S from './styled'

const Icons = () => (
  <>
    <Box as="article" gap="l" alignItems="center">
      <Icon name="box-icon" width={65} height={65} />

      <Text textAlign="center" lineHeight={30} uppercase>
        Stabilné a rýchle
        <br />
        dodávky
      </Text>
    </Box>

    <Box as="article" gap="l" alignItems="center">
      <Icon name="town-icon" width={98} height={74} />

      <Text textAlign="center" lineHeight={30} uppercase>
        Vysoká kvalita produktov -
        <br />
        záruka 10 rokov
      </Text>
    </Box>

    <Box as="article" gap="l" alignItems="center">
      <Icon name="euro-icon" width={63} height={63} />

      <Text textAlign="center" lineHeight={30} uppercase>
        Najlepšie ceny v
        <br />
        Európe
      </Text>
    </Box>
  </>
)

export default React.memo(Icons)
