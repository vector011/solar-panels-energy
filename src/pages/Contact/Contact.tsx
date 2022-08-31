import React from 'react'

import { ContactForm } from './sections'
import { Box, Container } from 'ui'

import * as S from './styled'

// TODO: mail templates

const Contact = () => (
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
        <ContactForm />
      </Container>
    </Box>
  </>
)

export default React.memo(Contact)
