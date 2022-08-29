import React, { ElementType, HTMLAttributes } from 'react'

import type { TThemeTextVariant } from 'styles/theme'
import type { TSizeProps, TSpacingProps } from '../types'
import type { TTextTranformProps, TTextVisualProps } from './props'

import * as S from './styled'

type StyleProps = TSpacingProps &
  TSizeProps &
  TTextVisualProps &
  TTextTranformProps

export type Props = {
  as?: ElementType
  children?: React.ReactNode
  variant?: TThemeTextVariant
} & StyleProps

export type TTextProps = HTMLAttributes<HTMLParagraphElement> & Props

const Text = ({ children, variant = 'paragraph', ...props }: TTextProps) => (
  <S.Wrapper {...{ variant, ...props }}>{children}</S.Wrapper>
)

export default Text
