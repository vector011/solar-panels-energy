import React from 'react'

import { Box, Icon, Text } from 'ui'

import * as S from './styled'

const Icons = () => (
  <>
    <Box as="article" gap="m" tablet={{ gap: 'l' }} alignItems="center">
      <Icon name="box-icon" width={65} height={65} />

      <Text
        textAlign="center"
        variant="button"
        lineHeight={30}
        uppercase
        maxw="60%"
        desktop={{ maxw: '75%' }}
      >
        Stabilné a rýchle dodávky
      </Text>
    </Box>

    <Box as="article" gap="m" tablet={{ gap: 'l' }} alignItems="center">
      <Icon name="town-icon" width={98} height={74} />

      <Text
        textAlign="center"
        variant="button"
        lineHeight={30}
        uppercase
        maxw="75%"
      >
        Vysoká kvalita produktov - záruka 10 rokov
      </Text>
    </Box>

    <Box as="article" gap="m" tablet={{ gap: 'l' }} alignItems="center">
      <Icon name="euro-icon" width={63} height={63} />

      <Text
        textAlign="center"
        variant="button"
        lineHeight={30}
        uppercase
        maxw="45%"
        desktop={{ maxw: '75%' }}
      >
        Najlepšie ceny v Európe
      </Text>
    </Box>
  </>
)

export default React.memo(Icons)
