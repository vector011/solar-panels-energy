import styled, { css } from 'styled-components'
import Slider from 'react-slick'

export const Wrapper = styled(Slider)`
  position: relative;
  width: 100%;

  overflow-x: hidden;

  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    width: auto !important;
    height: 100%;

    margin-right: ${({ theme }) =>
      `clamp(${theme.sizes.s}, 2vw + 1rem, ${theme.sizes.xxl})`};

    & > div {
      display: flex;
    }
  }
`

export const image = css`
  width: clamp(250px, 20vw + 1rem, 400px) !important;
  height: auto;
  max-height: 540px;

  object-fit: cover;
  object-position: center;
`
