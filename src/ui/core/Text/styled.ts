import styled from 'styled-components'

import { makeAllStyles } from '../styled'
import type { Props } from './Text'

export const Wrapper = styled.p<Props>`
  ${({ theme, variant }) => theme.textVariants[variant!]}

  ${makeAllStyles}
  ${({ css }) => css}
`
