import React, { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router'

import { Light } from 'ui'
import { Carousel, Footer, Navigation } from 'components'

import * as S from './styled'

const HOMEPAGE_PATHNAME = '/'

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
            'carousel/placeholder-1.jpeg',
            'carousel/placeholder-2.jpeg',
            'carousel/placeholder-3.jpeg',
            'carousel/placeholder-4.jpeg',
            'carousel/placeholder-5.jpeg',
          ]}
        />
      )}

      <Footer />
      <Light bg="secondary" size={581} bottom={-226} left={166} />
    </S.Wrapper>
  )
}

export default Main
