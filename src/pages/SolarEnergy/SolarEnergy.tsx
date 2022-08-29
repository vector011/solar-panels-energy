import React from 'react'

import { AboutUs, Header, Icons, Portfolio } from './sections'
import { Box, Container, Light, Video } from 'ui'

import * as S from './styled'

const SolarEnergy = () => (
  <>
    <Box as="section" minHeight="100vh" justifyContent="center">
      <Container row alignItems="center">
        <Header />
      </Container>
    </Box>

    <Box as="section" mb="5xl">
      <Container>
        <AboutUs />
      </Container>
    </Box>

    <Box as="section" position="relative" mb="section">
      <Container>
        <Video src="solar-energy.mp4" playInView muted controls loop />
      </Container>

      <Light bg="primary" size={581} top={112} right={-291} />
    </Box>

    <Box as="section" position="relative" mb="section">
      <Container row justifyContent="space-around">
        <Icons />
      </Container>

      <Light bg="secondary" size={581} top={-300} left={-124} />
    </Box>

    <Box as="section" mb="section">
      <Container row equal alignItems="center" gap="3xl">
        <Portfolio />
      </Container>
    </Box>
  </>
)

export default React.memo(SolarEnergy)
