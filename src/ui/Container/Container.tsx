import React, { ComponentProps } from 'react'

import Box from '../core/Box'

import * as S from './styled'

type Props = {
  children: React.ReactNode
} & ComponentProps<typeof Box>

const Container = ({ children, ...props }: Props) => (
  <Box as={S.Wrapper} {...props}>
    {children}
  </Box>
)

export default React.memo(Container)
