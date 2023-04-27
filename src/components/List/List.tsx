import React, { useCallback } from 'react'
import { Box, Text } from '~/ui'

import * as S from './styled'

type ListItem = string

type Props = {
  items?: ListItem[]
  uppercase?: boolean
}

const List = ({ items = [], uppercase }: Props) => {
  const renderItems = useCallback(
    (item: ListItem, idx: number) => (
      <Text
        as={S.Item}
        variant="paragraph"
        key={`item-${idx}`}
        css={{ textTransform: uppercase ? 'uppercase' : undefined }}
      >
        {item}
      </Text>
    ),
    [uppercase]
  )

  return (
    <Box as="ul" css={{ listStyle: 'none' }}>
      {items?.map(renderItems)}
    </Box>
  )
}

export default React.memo(List)
