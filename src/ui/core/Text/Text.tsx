import React, { ComponentProps, ElementType, HTMLAttributes } from 'react'
import { FlattenInterpolation, ThemeProps } from 'styled-components'

import type { TTheme, TThemeBreakpoint, TThemeTextVariant } from 'styles/theme'
import type { TSizeProps, TSpacingProps } from '../types'
import type { TTextTranformProps, TTextVisualProps } from './props'

import * as S from './styled'

type StyleProps = TSpacingProps &
  TSizeProps &
  TTextVisualProps &
  TTextTranformProps

type ResponsiveProps = PartialRecord<TThemeBreakpoint, StyleProps>

export type Props = {
  as?: ElementType
  css?: FlattenInterpolation<ThemeProps<TTheme>>
  children?: React.ReactNode
  variant?: TThemeTextVariant
} & StyleProps &
  ResponsiveProps

export type TTextProps = HTMLAttributes<HTMLParagraphElement> & Props

const Text = <T extends ElementType = 'p'>({
  variant = 'paragraph',
  children,
  ...props
}: TTextProps & ComponentProps<T>) => (
  <S.Wrapper {...{ variant, ...props }}>{children}</S.Wrapper>
)

export default Text
