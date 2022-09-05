import { css } from 'styled-components'

export const responsiveImage = css`
  width: 100%;
  height: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: clamp(360px, 50vw + 1rem, 779px);
  }
`
