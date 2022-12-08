import React, { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router'

import { Light } from 'ui'
import { Carousel, Footer, Navigation } from 'components'
import { getRoute } from 'config/router'

import * as S from './styled'

const HOMEPAGE_PATHNAME = getRoute('home')

const Main = () => {
  const { pathname } = useLocation()

  const isCarouselVisible = useMemo(
    () => pathname !== HOMEPAGE_PATHNAME,
    [pathname]
  )

  return (
    <S.Wrapper>
      <Light bg="primary" size={428} top={-47} left={-93} />
      <Navigation />

      <S.Content>
        <Outlet />
      </S.Content>

      {isCarouselVisible && (
        <Carousel
          items={[
            'carousel/carousel-1.jpeg',
            'carousel/carousel-2.jpeg',
            'carousel/carousel-3.jpeg',
            'carousel/carousel-4.jpeg',
            'carousel/carousel-5.jpeg',
          ]}
        />
      )}

      <Footer />
      <Light bg="secondary" size={581} bottom={-226} left={166} />
    </S.Wrapper>
  )
}

export default Main
