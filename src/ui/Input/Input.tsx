import React, { InputHTMLAttributes } from 'react'
import { ErrorMessage, Field, FieldAttributes } from 'formik'

import Text from '../core/Text'

import * as S from './styled'

export type Props = {
  hasError: boolean
} & FieldAttributes<any> &
  InputHTMLAttributes<HTMLInputElement>

// TODO: automatic height of textarea

const Input = ({ name, hasError, ...props }: Props) => (
  <S.Wrapper {...{ hasError }}>
    <Field id={name} {...{ name, ...props }} />

    {hasError && (
      <Text as="small" color="error" mt="xs">
        <ErrorMessage {...{ name }} />
      </Text>
    )}
  </S.Wrapper>
)

export default React.memo(Input)
