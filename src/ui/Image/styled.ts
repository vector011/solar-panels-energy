import styled from 'styled-components'

import type { Props } from './Image'

export const Wrapper = styled.picture<Props>`
  ${({ css }) => css}
`
