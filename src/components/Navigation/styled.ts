import styled from 'styled-components'

export const Nav = styled.nav`
  margin-right: -${({ theme }) => theme.sizes.s};

  & > a {
    display: inline-flex;
    align-items: center;
    padding: ${({ theme }) => theme.sizes.s};

    ${({ theme }) => theme.textVariants.navlink};
    color: ${({ theme }) => theme.colors.light};

    opacity: 0.4;
    transition: opacity 200ms;

    &.active {
      opacity: 1;
    }
  }
`
