import styled, { css, keyframes } from 'styled-components'

interface INav {
  visible?: boolean
}

const top = keyframes`
  0% {
    transform: scaleX(1) rotate(0deg);
  }
  30% {
    transform: scaleX(1.4);
  }
  100% {
    transform: rotate(45deg) translate(-15%, -8%) scaleX(1.4);
  }
`

const topClose = keyframes`
  0% {
    transform: rotate(45deg) translate(-15%, -8%) scaleX(1.4);
  }
  70% {
    transform: rotate(0deg) translate(0, 0) scaleX(1.4);
  }
  100% {
    transform: scaleX(1);
  }
`

const bottom = keyframes`
  0% {
    transform: scaleX(1);
  }
  20% {
    transform: scaleX(1.4) translateX(-30%);
  }
  100% {
    transform: rotate(-45deg) translate(-55%, 8%) scaleX(1.4);
  }
`

const bottomClose = keyframes`
  0% {
    transform: rotate(-45deg) translate(-55%, 8%) scaleX(1.4);
  }
  70% {
    transform: rotate(0deg) translateX(-40%) scaleX(1.4);
  }
  100% {
   transform: scaleX(1) ;
  }
`

const small = keyframes`
  0% {
    transform: scaleX(1);
  }
  30% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(0);
  }
`

const smallClose = keyframes`
  0% {
    transform: scaleX(0);
  }
  70% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`

export const Burger = styled.button<INav>`
  display: flex;
  z-index: ${({ theme }) => theme.zIndices.nav + 10};

  padding: ${({ theme }) => theme.sizes.s};
  margin-right: -${({ theme }) => theme.sizes.s};

  svg {
    width: clamp(27px, 3vw + 1rem, 35px);
    height: auto;

    #top-long {
      transform-origin: left;
      animation: ${({ visible }) => (visible ? top : topClose)} 700ms forwards;
    }

    #top-small {
      transform-origin: right;
      animation: ${({ visible }) => (visible ? small : smallClose)} 700ms
        forwards;
    }

    #middle {
      transition: all 200ms;
      transform-origin: center;

      transform: scaleX(${({ visible }) => (visible ? 0 : 1)});
      transition-delay: 200ms;
    }

    #bottom-long {
      transform-origin: left;
      animation: ${({ visible }) => (visible ? bottom : bottomClose)} 700ms
        forwards;
    }

    #bottom-small {
      transform-origin: left;
      animation: ${({ visible }) => (visible ? small : smallClose)} 700ms
        forwards;
    }
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
  transition: opacity 400ms, transform 400ms;

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

    &:nth-of-type(1)::before {
      transition-delay: 300ms;
    }

    &:nth-of-type(2)::before {
      transition-delay: 350ms;
    }

    &:nth-of-type(3)::before {
      transition-delay: 400ms;
    }

    &:nth-of-type(4)::before {
      transition-delay: 450ms;
    }

    &:nth-of-type(5)::before {
      transition-delay: 500ms;
    }

    ::before {
      content: '';

      transform-origin: bottom;
      position: absolute;
      inset: 0;

      background: url('assets/images/grain.png')
        ${({ theme }) => theme.colors.dark};
      background-size: 20%;

      ${({ visible }) => visible && 'transition: transform 1500ms;'};
      transform: scaleY(${({ visible }) => (visible ? 0 : 1)});
    }
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
