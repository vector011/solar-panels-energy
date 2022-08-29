import React, { useCallback } from 'react'

import { Image } from 'ui'

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
}

const Carousel = ({ items = [] }: Props) => {
  const renderItems = useCallback((item: Item, idx: number) => {
    const name = item.replace(/^.*[\\/]/, '').split('.')[0]
    const alt = name.replaceAll('-', ' ')
    return (
      <Image key={`image-${name}-${idx}`} src={`images/${item}`} alt={alt} />
    )
  }, [])

  return <S.Wrapper {...settings}>{items.map(renderItems)}</S.Wrapper>
}

export default React.memo(Carousel)
