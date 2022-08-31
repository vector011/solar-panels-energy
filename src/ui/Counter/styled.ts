import styled from 'styled-components'

interface IButton {
  disabled?: boolean
}

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

  ${({ theme }) => theme.textVariants.paragraph}

  border: 1px solid
    ${({ theme, disabled }) => theme.colors[disabled ? 'light' : 'primary']};
  color: ${({ theme, disabled }) =>
    theme.colors[disabled ? 'light' : 'primary']};
`
