import styled, { css } from 'styled-components'

interface IWrapper {
  hasError: boolean
}

const autofillFix = css`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.light};
    transition: background-color 5000s ease-in-out 0s;
  }
`

export const field = css`
  ${({ theme }) => theme.textVariants.button};
  color: ${({ theme }) => theme.colors.light};

  background-color: transparent;
  border: none;

  border-bottom: 0.5px solid ${({ theme }) => `${theme.colors.light}4d`};
  padding-block: ${({ theme }) => theme.sizes.xxs};

  transition: border-bottom-color 200ms;

  &::placeholder {
    color: ${({ theme }) => `${theme.colors.light}80`};
  }

  &:hover,
  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.light};
  }

  ${autofillFix}
`

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;

  width: 100%;

  textarea {
    max-height: 500px;
    resize: none;
  }

  input,
  textarea {
    ${field}
  }
`
