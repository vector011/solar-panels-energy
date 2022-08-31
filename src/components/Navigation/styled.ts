import styled, { css } from 'styled-components'

interface INav {
  visible?: boolean
}

export const Burger = styled.button`
  display: flex;
  z-index: ${({ theme }) => theme.zIndices.nav + 10};

  padding: ${({ theme }) => theme.sizes.s};
  margin-right: -${({ theme }) => theme.sizes.s};

  svg {
    width: clamp(27px, 3vw + 1rem, 35px);
    height: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop + 1}px) {
    display: none;
  }
`

const commonNav = css`
  display: flex;
  align-items: stretch;

  & > a {
    display: inline-flex;
    align-items: center;

    ${({ theme }) => theme.textVariants.navlink};
    color: ${({ theme }) => theme.colors.light};

    opacity: 0.4;
    transition: opacity 200ms;

    &.active {
      opacity: 1;
    }
  }
`

export const MobileNav = styled.nav<INav>`
  ${commonNav}

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateX(${({ visible }) => (visible ? 0 : 100)}%);
  transition: opacity 200ms, transform 400ms;

  flex-direction: column;
  justify-content: center;

  position: fixed;
  inset: 0;

  background: url('assets/images/grain.png') ${({ theme }) => theme.colors.dark};
  background-size: 20%;

  & > a {
    position: relative;

    padding-block: ${({ theme }) => theme.sizes.m};
    padding-inline: ${({ theme }) => theme.sizes.xxl};

    font-size: 45px;
    line-height: 55px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop + 1}px) {
    display: none;
  }
`

export const Nav = styled.nav`
  ${commonNav}

  margin-right: -${({ theme }) => theme.sizes.s};

  & > a {
    padding: ${({ theme }) => theme.sizes.s};

    transition: opacity 200ms;
    opacity: 0.4;

    &.active {
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`
