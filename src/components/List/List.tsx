import React, { useCallback } from 'react'

import * as S from './styled'

type ListItem = string

type Props = {
  items?: ListItem[]
  uppercase?: boolean
}

const List = ({ items = [], uppercase }: Props) => {
  const renderItems = useCallback(
    (item: ListItem, idx: number) => (
      <S.Item key={`item-${idx}`} {...{ uppercase }}>
        {item}
      </S.Item>
    ),
    [uppercase]
  )

  return <S.Wrapper>{items?.map(renderItems)}</S.Wrapper>
}

export default React.memo(List)
