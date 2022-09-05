import React, { Dispatch, SetStateAction, useCallback } from 'react'

import * as S from './styled'

type Props = {
  value: number
  onChange: Dispatch<SetStateAction<number>>
}

const Counter = ({ value, onChange }: Props) => {
  const increment = useCallback(() => onChange((prev) => prev + 1), [onChange])
  const decrement = useCallback(
    () => onChange((prev) => (prev || 1) - 1),
    [onChange]
  )

  return (
    <S.Wrapper>
      <S.Button title="Ubrať" onClick={decrement} disabled={!value}>
        -
      </S.Button>

      <span>{value}</span>

      <S.Button title="Pridať" onClick={increment}>
        +
      </S.Button>
    </S.Wrapper>
  )
}

export default React.memo(Counter)
