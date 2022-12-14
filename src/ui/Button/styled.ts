import styled, { css } from 'styled-components'

import type { Props } from './Button'

const wideVariant = css`
  align-self: center;
  width: 100%;
  max-width: 800px;
`

const hover = css`
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`

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
  box-shadow: 0px 4px 4px rgba(128, 49, 49, 0.25);

  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadii.button};

  ${({ theme }) => theme.textVariants.button};
  color: ${({ theme, secondary }) =>
    theme.colors[secondary ? 'primary' : 'dark']};
  text-align: center;

  ${({ wide }) => wide && wideVariant}

  transition: all 200ms;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  ${({ disabled }) => !disabled && hover}
`
