import styled from 'styled-components'

export const Wrapper = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.textVariants.paragraph}
  text-transform: uppercase;

  padding-block: ${({ theme }) => theme.sizes.m};
  padding-right: 12%;

  border-bottom: 0.5px solid ${({ theme }) => theme.colors.light};

  &::before {
    content: '';
    display: inline-block;

    width: 8px;
    height: 8px;

    background-color: ${({ theme }) => theme.colors.light};
    margin-right: ${({ theme }) => theme.sizes['3xl']};
  }
`
