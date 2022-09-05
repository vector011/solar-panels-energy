import styled, { css } from 'styled-components'

export const navOverlay = css`
  &::before {
    content: '';
    height: 400px;

    position: absolute;
    inset: 0;
    bottom: auto;

    opacity: 0.8;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.dark} 0%,
      rgba(10, 10, 10, 0) 100%
    );
  }
`

export const Overlay = styled.article`
  background-color: ${({ theme }) => `${theme.colors.dark}80`};

  button {
    min-width: 222px;
    align-self: center;

    padding-block: ${({ theme }) => theme.sizes.xs};
    margin-top: ${({ theme }) => theme.sizes.m};
  }
`
