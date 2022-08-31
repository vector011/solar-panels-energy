import styled, { css } from 'styled-components'

export const Wrapper = styled.header``

export const responsiveImage = css`
  @media (min-width: 1800px) {
    margin-left: -8%;
    margin-right: -6%;
  }

  @media (max-width: 1800px) {
    margin-left: -10%;
  }

  @media (max-width: 1500px) {
    margin-left: -10%;
    padding-top: 0;
  }

  @media (max-width: 1160px) {
    margin-left: -18%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    margin-left: 0;
  }

  img {
    width: 100%;
    height: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      width: clamp(366px, 50vw + 1rem, 984px);
    }
  }
`

export const responsiveButtons = css`
  button {
    flex: 1;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      flex: 0;
    }
  }
`
