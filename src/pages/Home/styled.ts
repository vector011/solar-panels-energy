import { css } from 'styled-components'

export const overlay = css`
  background-color: ${({ theme }) => `${theme.colors.dark}80`};

  button {
    min-width: 222px;
    align-self: center;

    padding-block: ${({ theme }) => theme.sizes.xs};
    margin-top: ${({ theme }) => theme.sizes.m};
  }
`
