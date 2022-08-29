import styled from 'styled-components'

import type { Props } from './Video'

export const Wrapper = styled.video<Props>`
  width: 100%;

  ${({ cover }) => cover && 'object-fit: cover;'}
  ${({ fullHeight }) => fullHeight && 'min-height: 100vh;'}
`
