import React, { useCallback } from 'react'

import * as S from './styled'

type ListItem = string

type Props = {
  items?: ListItem[]
}

const List = ({ items = [] }: Props) => {
  const renderItems = useCallback(
    (item: ListItem, idx: number) => (
      <S.Item key={`item-${idx}`}>{item}</S.Item>
    ),
    [items]
  )

  return <S.Wrapper>{items?.map(renderItems)}</S.Wrapper>
}

export default React.memo(List)
