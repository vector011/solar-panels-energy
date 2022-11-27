import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useMemo,
} from 'react'
import { ErrorMessage, Field, FieldAttributes } from 'formik'

import Text from '../core/Text'

import * as S from './styled'

export type Props = {
  hasError: boolean
} & FieldAttributes<any> &
  InputHTMLAttributes<HTMLInputElement>

const Input = ({ as, name, hasError, ...props }: Props) => {
  const isTextarea = useMemo(() => as === 'textarea', [as])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight + 1}px`
  }, [])

  return (
    <S.Wrapper {...{ hasError }}>
      <Field
        id={name}
        onKeyUp={isTextarea ? handleChange : undefined}
        {...{ as, name, ...props }}
      />

      {hasError && (
        <Text as="small" color="error" mt="xs" css={S.firstLetter}>
          <ErrorMessage {...{ name }} />
        </Text>
      )}
    </S.Wrapper>
  )
}

export default React.memo(Input)
