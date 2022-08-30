import React from 'react'

import { Benefits, Panels } from './sections'
import { Box, Container, Light } from 'ui'

import * as S from './styled'

const Products = () => (
  <>
    <Box
      as="section"
      position="relative"
      minHeight="100vh"
      pt="top"
      pb="section"
    >
      <Container>
        <Benefits />
      </Container>
    </Box>

    <Box as="section" position="relative" mb="section">
      <Light bg="primary" size={581} top={50} left={-141} />

      <Container>
        <Panels />
      </Container>

      <Light bg="primary" size={581} bottom={-280} right={-174} />
    </Box>
  </>
)

export default React.memo(Products)
