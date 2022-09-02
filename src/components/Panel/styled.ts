import { css } from 'styled-components'

export const responsive = css`
  gap: ${({ theme }) => theme.sizes['l']};

  @media (max-width: 1110px) {
    gap: ${({ theme }) => theme.sizes['4xl']};

    & > div {
      align-items: center;
    }
  }
`

export const responsiveImage = css<{ width: number }>`
  width: 100%;
  height: auto;

  max-width: ${({ width }) => width}px;
`
