import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Icon, Text } from 'ui'

const Icons = () => {
  const { t } = useTranslation()

  return (
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
          {t('solarEnergy:icons.first')}
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
          {t('solarEnergy:icons.second')}
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
          {t('solarEnergy:icons.third')}
        </Text>
      </Box>
    </>
  )
}

export default React.memo(Icons)
