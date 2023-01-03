import React, { ComponentProps, ElementType, HTMLAttributes } from 'react'
import { FlattenInterpolation, ThemeProps } from 'styled-components'

import type { TTheme, TThemeBreakpoint } from 'styles/theme'

import type {
  TBackgroundProps,
  TDisplayProps,
  TPositionProps,
  TSizeProps,
  TSpacingProps,
} from '../types'

import * as S from './styled'

type StyleProps = TSpacingProps &
  TPositionProps &
  TDisplayProps &
  TSizeProps &
  TBackgroundProps
type ResponsiveProps = PartialRecord<TThemeBreakpoint, StyleProps>

export type Props = {
  as?: ElementType
  css?: FlattenInterpolation<ThemeProps<TTheme>>
  children?: React.ReactNode
} & StyleProps &
  ResponsiveProps

export type TBoxProps = HTMLAttributes<HTMLDivElement> & Props

const Box = <T extends ElementType = 'div'>({
  children,
  ...props
}: TBoxProps & ComponentProps<T>) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Box
