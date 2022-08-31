import React, { ComponentProps } from 'react'

import { Box, Counter, Icon, Image, Text } from 'ui'

import * as S from './styled'

type Props = {
  big?: boolean
  w: string
  mm: string
  kg: string
} & ComponentProps<typeof Counter>

// TODO: fix image ratio

const Panel = ({ big, w, mm, kg, ...props }: Props) => (
  <Box as="article" alignItems="center" css={S.responsive}>
    <Image
      css={S.responsiveImage}
      src={`images/solar-panel-${big ? 'big' : 'small'}.png`}
      alt={`${big ? 'Väčší' : 'Menší'} solárny panel`}
      width={big ? 613 : 473}
      height={big ? 382 : 295}
    />

    <Box
      pt="l"
      gap="xxl"
      width="100%"
      desktop={{ gap: '4xl' }}
      largeDesktop={{ gap: '6xl', row: true, alignItems: 'flex-end' }}
    >
      <Box gap="l">
        <Text variant="paragraph2" uppercase>
          {big ? 'Väčší' : 'Menší'} panel
        </Text>

        <Box
          row
          gap="3xl"
          desktop={{ gap: '5xl' }}
          largeDesktop={{ gap: 'big' }}
          alignItems="center"
        >
          <Icon name="energy-icon" title="W" width={35} height={35} />
          <Text variant="paragraph2">{w} W</Text>
        </Box>

        <Box
          row
          gap="3xl"
          desktop={{ gap: '5xl' }}
          largeDesktop={{ gap: 'big' }}
          alignItems="center"
        >
          <Icon name="size-icon" title="mm" width={35} height={35} />
          <Text variant="paragraph2">{mm} mm</Text>
        </Box>

        <Box
          row
          gap="3xl"
          desktop={{ gap: '5xl' }}
          largeDesktop={{ gap: 'big' }}
          alignItems="center"
        >
          <Icon name="weight-icon" title="kg" width={35} height={35} />
          <Text variant="paragraph2">{kg} kg</Text>
        </Box>
      </Box>

      <Counter {...props} />
    </Box>
  </Box>
)

export default React.memo(Panel)
