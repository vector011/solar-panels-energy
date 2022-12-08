import styled from 'styled-components'

import type { Props } from './Image'

export const Wrapper = styled.picture<Props>`
  img {
    border-radius: ${({ theme }) => theme.borderRadii.card};

    ${({ css }) => css}
  }
`
