import styled, { keyframes } from 'styled-components'

const blurIn = keyframes`
  from {
    backdrop-filter: blur(0px);
  }
  to {
    backdrop-filter: blur(14px);
  }
`

const fadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Wrapper = styled.section`
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;

  position: fixed;
  inset: 0;

  display: flex;
  place-content: center;

  background-color: ${({ theme }) => theme.colors.modal};
  backdrop-filter: blur(14px);

  animation: ${blurIn} 800ms ease forwards;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 16px;
  }
`

export const Modal = styled.article`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.modal + 10};
  margin: auto;

  display: flex;
  flex-direction: column;

  padding-block: ${({ theme }) => theme.sizes['7xl']};
  padding-inline: ${({ theme }) => theme.sizes.s};

  background: url('assets/images/grain.png') ${({ theme }) => theme.colors.dark};
  background-size: 20%;

  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.modal}px;
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    min-height: auto;
  }

  opacity: 0;
  transform: translateY(-20px);
  animation: ${fadeInBottom} 800ms ease forwards;
  animation-delay: 300ms;
`

export const Content = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.modal - 460}px;
  width: 100%;
  margin-inline: auto;
`

export const Close = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.sizes.l};
  right: ${({ theme }) => theme.sizes.l};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`
