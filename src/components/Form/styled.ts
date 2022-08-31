import { css } from 'styled-components'

export const responsiveButton = css`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    button {
      width: 100%;
    }
  }
`
