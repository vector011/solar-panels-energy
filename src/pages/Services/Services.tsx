import React from 'react'

import { Help } from './sections'
import { Box, Container } from 'ui'

import * as S from './styled'

const Services = () => (
  <>
    <Box
      as="section"
      position="relative"
      minHeight="100vh"
      pt="top"
      pb="section"
    >
      <Container>
        <Help />
      </Container>
    </Box>
  </>
)

export default React.memo(Services)
