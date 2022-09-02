import React, { useCallback } from 'react'

import { Image } from 'ui'
import { getFileName } from 'utils/functions'

import * as S from './styled'

type Item = string

type Props = {
  items?: Item[]
}

const settings = {
  autoplay: true,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1500,
  autoplaySpeed: 4000,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  variableWidth: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
}

const Carousel = ({ items = [] }: Props) => {
  const renderItems = useCallback((item: Item, idx: number) => {
    const name = getFileName(item)
    const alt = name.replaceAll('-', ' ')

    return (
      <Image
        css={S.image}
        key={`image-${name}-${idx}`}
        src={`images/${item}`}
        alt={alt}
        width={400}
        height={540}
      />
    )
  }, [])

  return <S.Wrapper {...settings}>{items.map(renderItems)}</S.Wrapper>
}

export default React.memo(Carousel)
