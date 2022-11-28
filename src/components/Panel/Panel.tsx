import React, { ComponentProps } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Counter, Icon, Image, Text } from 'ui'

import * as S from './styled'

type Props = {
  big?: boolean
  w: string
  mm: string
  kg: string
} & ComponentProps<typeof Counter>

const Panel = ({ big, w, mm, kg, ...props }: Props) => {
  const { t } = useTranslation()

  return (
    <Box as="article" alignItems="center" css={S.responsive}>
      <Box ph={big ? '0' : '60px'}>
        <Image
          css={S.responsiveImage}
          src={`images/solar-panel-${big ? 'big' : 'small'}.png`}
          alt={
            t('components:panel.image.alt', {
              size: big
                ? t('components:panel.size.big')
                : t('components:panel.size.small'),
            })!
          }
          width={big ? 613 : 473}
          height={big ? 382 : 295}
        />
      </Box>

      <Box
        gap="xxl"
        width="100%"
        alignItems="center"
        tablet={{ row: true, alignItems: 'flex-end' }}
        desktop={{ gap: '4xl' }}
        largeDesktop={{ gap: '6xl' }}
      >
        <Box gap="l">
          <Text variant="paragraph2" uppercase>
            {t('components:panel.title', {
              size: big
                ? t('components:panel.size.big')
                : t('components:panel.size.small'),
            })}
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
}

export default React.memo(Panel)
