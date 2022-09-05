import React from 'react'

import { Help } from './sections'
import { Box, Container } from 'ui'

const Services = () => (
  <>
    <Box
      as="section"
      position="relative"
      pt="section"
      tablet={{ pt: 'top', minh: '100vh' }}
      pb="section"
    >
      <Container>
        <Help />
      </Container>
    </Box>
  </>
)

export default React.memo(Services)
