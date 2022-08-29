import styled from 'styled-components'

import type { Props } from './Button'

export const Wrapper = styled.button<Props>`
  display: inline;
  align-self: flex-start;

  padding-block: ${({ theme }) =>
    `clamp(${theme.sizes.xs}, 2.5vw + 0.1rem, ${theme.sizes.sm})`};
  padding-inline: ${({ theme }) =>
    `clamp(${theme.sizes.m}, 2.5vw + 0.1rem, ${theme.sizes.l})`};

  min-width: 288px;

  background-color: ${({ theme, secondary }) =>
    secondary ? 'transparent' : theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.button};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.textVariants.button};
  color: ${({ theme, secondary }) =>
    theme.colors[secondary ? 'primary' : 'dark']};
  text-align: center;
`
