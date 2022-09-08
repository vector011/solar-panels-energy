import styled, { css } from 'styled-components'

interface IButton {
  disabled?: boolean
}

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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    ${({ theme }) => theme.textVariants.paragraph2}
    padding: ${({ theme }) => theme.sizes.xs};
    min-width: 70px;
    text-align: center;
  }
`

export const Button = styled.button<IButton>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ theme }) => theme.textVariants.paragraph2}

  border: 1px solid
    ${({ theme, disabled }) => theme.colors[disabled ? 'light' : 'primary']};
  color: ${({ theme, disabled }) =>
    theme.colors[disabled ? 'light' : 'primary']};

  transition: all 200ms;
  ${({ disabled }) => !disabled && hover};
`
