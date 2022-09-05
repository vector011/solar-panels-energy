import React from 'react'

import { AboutUs, Header, Icons, Portfolio } from './sections'
import { Box, Container, Light, Video } from 'ui'

import * as S from './styled'

const SolarEnergy = () => (
  <>
    <Box
      as="header"
      pt="section"
      pb="section"
      tablet={{ pt: 'top', minh: '100vh' }}
      largeDesktop={{ pt: 200 }}
      justifyContent="center"
    >
      <Container
        alignItems="center"
        gap="3xl"
        tablet={{ mb: '0' }}
        desktop={{ flexDirection: 'row', gap: '0' }}
      >
        <Header />
      </Container>
    </Box>

    <Box as="section" mb="4xl" tablet={{ mb: '5xl' }} zIndex="base">
      <Container>
        <AboutUs />
      </Container>
    </Box>

    <Box as="section" position="relative" mb="section">
      <Container>
        <Video
          css={S.responsiveVideo}
          src="solar-energy.mp4"
          disableWebm
          playsInline
          playInView
          muted
          controls
          loop
        />
      </Container>

      <Light bg="primary" size={581} top={112} right={-291} />
    </Box>

    <Box as="section" position="relative" mb="section">
      <Container
        gap="big"
        justifyContent="space-around"
        tablet={{ row: true, gap: 'l' }}
      >
        <Icons />
      </Container>

      <Light bg="secondary" size={581} top={-300} left={-124} />
    </Box>

    <Box as="section" mb="section">
      <Container
        flexDirection="column-reverse"
        alignItems="center"
        gap="4xl"
        desktop={{ gap: '3xl', flexDirection: 'row' }}
        equal
      >
        <Portfolio />
      </Container>
    </Box>
  </>
)

export default React.memo(SolarEnergy)
