import styled from 'styled-components'

export const Wrapper = styled.footer`
  border-top: 0.5px solid ${({ theme }) => theme.colors.light};
`

export const ScrollTop = styled.button`
  padding-block: ${({ theme }) => theme.sizes.s};
  padding-inline: ${({ theme }) => theme.sizes.m};

  margin-right: -${({ theme }) => theme.sizes.m};
`

export const SocialIcons = styled.div`
  margin-left: -${({ theme }) => theme.sizes.xxs};

  & > a {
    display: inline-flex;
    padding: ${({ theme }) => theme.sizes.xxs};
  }
`

export const Nav = styled.nav`
  margin-top: -${({ theme }) => theme.sizes.xs};

  & > a {
    display: inline-flex;
    align-items: center;
    padding: ${({ theme }) => theme.sizes.xs};

    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.light};

    opacity: 0.4;
    transition: opacity 200ms;

    &.active {
      opacity: 1;
    }
  }
`
