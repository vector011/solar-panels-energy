import Image from 'next/image'
import React, { useCallback } from 'react'
import Slider from 'react-slick'

import { Box } from '~/ui'
import { getFileName } from '~/utils/functions'

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
    const name = getFileName(item) || ''
    const alt = name.replaceAll('-', ' ')

    return (
      <Box
        as={Image}
        key={`image-${name || ''}-${idx}`}
        src={`/assets/images/${item}`}
        alt={alt}
        width={400}
        height={540}
        priority
        css={{
          width: 'clamp(250px, 20vw + 1rem, 400px) !important',
          height: 'auto',
          maxHeight: 540,

          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: '$5',
        }}
      />
    )
  }, [])

  return (
    <Box
      as={Slider}
      {...settings}
      css={{
        position: 'relative',
        width: '100%',

        overflowX: 'hidden',

        '.slick-track': {
          display: 'flex !important',
        },

        '.slick-slide': {
          width: 'auto !important',
          height: '100%',

          marginRight: 'clamp($5, 2vw + 1rem, $10)',

          '& > div': {
            display: 'flex',
          },
        },
      }}
    >
      {items.map(renderItems)}
    </Box>
  )
}

export default React.memo(Carousel) as typeof Carousel
