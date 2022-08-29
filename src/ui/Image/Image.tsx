import React, { ImgHTMLAttributes } from 'react'

import * as S from './styled'

export type Props = {} & ImgHTMLAttributes<HTMLImageElement>

const Image = ({ src, ...props }: Props) => (
  <S.Wrapper src={`/assets/${src}`} {...props} />
)

export default React.memo(Image)
