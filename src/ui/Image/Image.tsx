import React, { ImgHTMLAttributes } from 'react'
import { FlattenInterpolation, ThemeProps } from 'styled-components'

import type { TTheme } from 'styles/theme'

import * as S from './styled'

export type Props = {
  css?: FlattenInterpolation<ThemeProps<TTheme>>
} & ImgHTMLAttributes<HTMLImageElement>

const Image = ({ src, ...props }: Props) => (
  <S.Wrapper src={`/assets/${src}`} {...props} />
)

export default React.memo(Image)
