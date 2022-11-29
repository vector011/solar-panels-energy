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
  padding-right: 9%;

  border-bottom: 0.5px solid ${({ theme }) => theme.colors.light};

  &::before {
    content: '';

    display: inline-block;
    align-self: flex-start;
    flex-shrink: 0;

    width: 8px;
    height: 8px;
    border-radius: ${({ theme }) => theme.borderRadii.rounded};

    margin-top: 0.6ch;

    background-color: ${({ theme }) => theme.colors.light};
    margin-right: ${({ theme }) => theme.sizes.s};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      margin-right: ${({ theme }) => theme.sizes.l};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      margin-right: ${({ theme }) => theme.sizes['3xl']};
    }
  }
`
