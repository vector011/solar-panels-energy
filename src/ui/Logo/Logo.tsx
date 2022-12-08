import React, { ComponentProps } from 'react'

import Image from '../Image'
import { getRoute } from 'config/router'

import * as S from './styled'

export type Props = {
  responsive?: boolean
} & ComponentProps<typeof Image>

const Logo = ({ responsive, ...props }: Props) => (
  <S.Wrapper to={getRoute('home')} $responsive={responsive}>
    <Image
      src="logo-long.svg"
      alt="JP Green Energy logo"
      width={195}
      height={67}
      {...props}
    />
  </S.Wrapper>
)

export default React.memo(Logo)
