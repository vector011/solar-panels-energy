import { css } from 'styled-components'

export const responsive = css`
  gap: ${({ theme }) => theme.sizes.xxl};
`

export const responsiveImage = css<{ width: number }>`
  width: 100%;
  height: auto;
`
