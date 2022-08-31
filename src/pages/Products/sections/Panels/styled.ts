import { css } from 'styled-components'

export const responsivePanels = css`
  gap: ${({ theme }) => theme.sizes.block};

  @media (min-width: 1110px) {
    flex-direction: row;
    align-items: flex-end;

    gap: ${({ theme }) => theme.sizes.m};
  }
`
