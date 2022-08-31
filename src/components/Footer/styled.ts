import styled from 'styled-components'

export const Wrapper = styled.footer`
  border-top: 0.5px solid ${({ theme }) => theme.colors.light};

  @media (min-width: ${({ theme }) => theme.breakpoints.phone}px) {
    flex-direction: column;

    & > div:last-of-type {
      align-self: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    align-items: center;

    & > div,
    nav {
      align-items: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    align-items: flex-start;

    & > div,
    nav {
      align-items: stretch;
    }

    & > div:last-of-type {
      width: 100%;
      align-items: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop + 121}px) {
    flex-direction: row;
    align-items: flex-start;

    & > div,
    nav {
      align-items: stretch;
    }

    & > div:last-of-type {
      width: auto;
      align-items: flex-start;
      align-self: flex-start;
    }
  }
`

export const ScrollTop = styled.button`
  display: flex;
  align-items: center;

  padding-block: ${({ theme }) => theme.sizes.s};
  padding-inline: ${({ theme }) => theme.sizes.m};

  margin-right: -${({ theme }) => theme.sizes.m};

  @media (max-width: 1260px) {
    display: none;
  }
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
  margin-left: -${({ theme }) => theme.sizes.xs};

  & > a {
    display: inline-flex;
    align-items: center;
    padding: ${({ theme }) => theme.sizes.xs};

    ${({ theme }) => theme.textVariants.button}
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.light};

    opacity: 0.4;
    transition: opacity 200ms;

    &.active {
      opacity: 1;
    }
  }
`
