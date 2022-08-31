import React from 'react'

import { AboutUs, Header, Icons, Portfolio } from './sections'
import { Box, Container, Light, Video } from 'ui'

import * as S from './styled'

// TODO: check responsivity

const SolarEnergy = () => (
  <>
    <Box as="header" tablet={{ minh: '100vh' }} justifyContent="center">
      <Container
        alignItems="center"
        gap="3xl"
        pt="section"
        mb="section"
        tablet={{ pt: 'top', mb: '0' }}
        desktop={{ flexDirection: 'row', pt: '0', gap: '0' }}
      >
        <Header />
      </Container>
    </Box>

    <Box as="section" mb="4xl" tablet={{ mb: '5xl' }}>
      <Container>
        <AboutUs />
      </Container>
    </Box>

    <Box as="section" position="relative" mb="section">
      <Container>
        <Video
          css={S.responsiveVideo}
          src="solar-energy.mp4"
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
