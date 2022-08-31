import styled from 'styled-components'

import type { Props } from './Image'

export const Wrapper = styled.img<Props>`
  ${({ css }) => css}
`
