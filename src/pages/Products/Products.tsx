import React from 'react'

import { Benefits, Panels } from './sections'
import { Box, Container, Light } from 'ui'

const Products = () => (
  <>
    <Box
      as="section"
      position="relative"
      pt="section"
      tablet={{ pt: 'top' }}
      pb="block"
    >
      <Container>
        <Benefits />
      </Container>
    </Box>

    <Box as="section" position="relative" mb="section">
      <Light bg="primary" size={581} top={300} left={-141} />

      <Container>
        <Panels />
      </Container>

      <Light bg="primary" size={581} bottom={300} right={-174} />
    </Box>
  </>
)

export default React.memo(Products)
