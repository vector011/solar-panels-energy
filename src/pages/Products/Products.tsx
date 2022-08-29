import React from 'react'

import { Benefits } from './sections'
import { Box, Container } from 'ui'

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
  </>
)

export default React.memo(Products)
