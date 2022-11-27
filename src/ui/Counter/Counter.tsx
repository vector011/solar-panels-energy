import React, { Dispatch, SetStateAction, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import * as S from './styled'

type Props = {
  value: number
  onChange: Dispatch<SetStateAction<number>>
}

const Counter = ({ value, onChange }: Props) => {
  const { t } = useTranslation()

  const increment = useCallback(() => onChange((prev) => prev + 1), [onChange])
  const decrement = useCallback(
    () => onChange((prev) => (prev || 1) - 1),
    [onChange]
  )

  return (
    <S.Wrapper>
      <S.Button
        title={
          t('components:counter.decrement', { defaultValue: 'decrement' })!
        }
        onClick={decrement}
        disabled={!value}
      >
        -
      </S.Button>

      <span>{value}</span>

      <S.Button
        title={
          t('components:counter.increment', { defaultValue: 'increment' })!
        }
        onClick={increment}
      >
        +
      </S.Button>
    </S.Wrapper>
  )
}

export default React.memo(Counter)
