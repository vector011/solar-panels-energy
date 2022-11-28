import React, { useCallback, useContext } from 'react'

import { Box, Icon, Text } from 'ui'
import { I18nContext } from 'contexts'
import translations from 'i18n'

import * as S from './styled'

const availableLangs = Object.keys(translations)

const Language = () => {
  const { activeLang, changeLanguage } = useContext(I18nContext)

  const renderLangs = useCallback(
    (item: string) =>
      item !== activeLang ? (
        <Box<'button'>
          row
          as="button"
          key={item}
          onClick={() => changeLanguage(item)}
          alignItems="center"
          gap="3xs"
        >
          <Text as="span" variant="navlink" uppercase>
            {item}
          </Text>
        </Box>
      ) : null,
    [activeLang, changeLanguage]
  )

  return (
    <Box as={S.Wrapper} position="relative">
      <Box as="button" row alignItems="center" gap="3xs">
        <Text as="span" variant="navlink" uppercase>
          {activeLang}
        </Text>

        <Icon name="arrow-down-icon" />
      </Box>

      <Box as="article" position="absolute">
        {availableLangs?.map(renderLangs)}
      </Box>
    </Box>
  )
}

export default React.memo(Language)
