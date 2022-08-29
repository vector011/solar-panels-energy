import React, { ElementType, HTMLAttributes } from 'react'
import { FlattenInterpolation, ThemeProps } from 'styled-components'

import type { TTheme } from 'styles/theme'

import type {
  TDisplayProps,
  TPositionProps,
  TSizeProps,
  TSpacingProps,
} from '../types'

import * as S from './styled'

type StyleProps = TSpacingProps & TPositionProps & TDisplayProps & TSizeProps

export type Props = {
  as?: ElementType
  css?: FlattenInterpolation<ThemeProps<TTheme>>
  children?: React.ReactNode
} & StyleProps

export type TBoxProps = HTMLAttributes<HTMLDivElement> & Props

const Box = ({ children, ...props }: TBoxProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Box
