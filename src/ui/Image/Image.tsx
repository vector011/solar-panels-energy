import React, { ImgHTMLAttributes, useMemo } from 'react'
import { FlattenInterpolation, ThemeProps } from 'styled-components'

import type { TTheme } from 'styles/theme'
import { getFile } from 'utils/functions'

import * as S from './styled'

export type Props = {
  css?: FlattenInterpolation<ThemeProps<TTheme>>
} & ImgHTMLAttributes<HTMLImageElement>

const Image = ({ src, ...props }: Props) => {
  const file = useMemo(() => getFile(src!), [src])
  const webp = useMemo(() => src?.replace(file[1], 'webp'), [file, src])

  return (
    <S.Wrapper>
      {file[1] !== 'svg' && (
        <source type="image/webp" srcSet={`/assets/${webp}`} />
      )}
      <source type={`image/${file[1]}`} srcSet={`/assets/${src}`} />
      <img src={`/assets/${src}`} {...props} />
    </S.Wrapper>
  )
}

export default React.memo(Image)
