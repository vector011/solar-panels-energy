import styled, { css } from 'styled-components'

export const responsiveImage = css`
  width: 100%;
  height: auto;
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: -110px;
    margin-left: -15px;
    width: 105%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeDesktop}px) {
    margin-top: -130px;
    margin-left: -10px;
  }
`

export const Map = styled.iframe`
  border-radius: ${({ theme }) => theme.borderRadii.card};
  width: 100%;

  min-height: 400px;
`
