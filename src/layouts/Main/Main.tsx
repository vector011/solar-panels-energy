import React from 'react'
import { useRouter } from 'next/router'

import { Box, Light } from '~/ui'
import { Carousel, Footer, Navigation } from '~/components'

type TMainProps = {
  children?: React.ReactNode
  className?: string
}

const Main = ({ children, ...props }: TMainProps) => {
  const { pathname } = useRouter()

  return (
    <Box
      id="layout"
      css={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        isolation: 'isolate',
      }}
      {...props}
    >
      <Light
        size={428}
        css={{ backgroundColor: '$primary', top: -47, left: -93 }}
      />

      <Navigation />

      <Box
        as="main"
        css={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {children}
      </Box>

      {pathname !== '/' && (
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

      <Light
        size={581}
        css={{ backgroundColor: '$secondary', bottom: -226, left: 166 }}
      />
    </Box>
  )
}

export default Main
