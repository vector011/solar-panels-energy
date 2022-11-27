import { css } from 'styled-components'

export const responsiveImage = css`
  width: 100%;
  height: auto;
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: -80px;
  }
`
