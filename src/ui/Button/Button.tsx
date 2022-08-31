import React, { ButtonHTMLAttributes } from 'react'

import WithLoading from '../hoc/WithLoading'

import * as S from './styled'

export type Props = {
  onClick?: () => void
  secondary?: boolean
  wide?: boolean
  children?: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

// TODO: hover

const Button = ({ children, ...props }: Props) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>
}

export default React.memo(WithLoading<Props>(Button))
