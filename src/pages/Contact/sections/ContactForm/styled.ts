import { css } from 'styled-components'

export const responsiveImage = css`
  width: 100%;
  height: auto;
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: -140px;
    margin-left: -20px;
    width: 105%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeDesktop}px) {
    margin-top: -150px;
    margin-left: -50px;
  }
`
