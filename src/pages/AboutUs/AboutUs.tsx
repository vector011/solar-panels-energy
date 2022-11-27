import React from 'react'

import { Description } from './sections'
import { Box, Container } from 'ui'

const AboutUs = () => (
  <>
    <Box
      as="section"
      position="relative"
      minHeight="100vh"
      pt="section"
      tablet={{ pt: 'top' }}
      pb="section"
    >
      <Container>
        <Description />
      </Container>
    </Box>
  </>
)

export default React.memo(AboutUs)
