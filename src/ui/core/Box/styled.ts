import styled, { css } from 'styled-components'

import { makeAllStyles } from '../styled'
import type { Props } from './Box'

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${makeAllStyles}
  ${({ css }) => css}

  ${({ equal }) =>
    equal &&
    css`
      & > * {
        flex: 1;
      }
    `}
`
