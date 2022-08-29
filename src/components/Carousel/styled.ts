import styled from 'styled-components'
import Slider from 'react-slick'

export const Wrapper = styled(Slider)`
  position: relative;
  width: 100%;

  overflow-x: hidden;

  img {
    width: 400px !important;
    height: 540px;

    object-fit: cover;
    object-position: center;
  }

  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    width: auto !important;
    height: 100%;
    margin-right: ${({ theme }) => theme.sizes.xxl};

    & > div {
      display: flex;
    }
  }
`
