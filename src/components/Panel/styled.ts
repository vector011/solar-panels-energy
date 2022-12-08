import { css } from 'styled-components'

export const responsive = css`
  gap: ${({ theme }) => theme.sizes['l']};
`

export const responsiveImage = css<{ width: number }>`
  width: 100%;
  height: auto;

  max-width: ${({ width }) => width}px;
`
