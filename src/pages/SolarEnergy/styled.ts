import { css } from 'styled-components'

export const responsiveVideo = css`
  min-height: 422px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadii.video};
`
