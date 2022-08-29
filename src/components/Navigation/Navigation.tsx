import React from 'react'
import { NavLink } from 'react-router-dom'

import { Box, Container, Image } from 'ui'

import * as S from './styled'

const Navigation = () => (
  <Box absolute inset={0} zIndex="nav" bottom="auto" paddingVertical="xl">
    <Container row justifyContent="space-between">
      <NavLink to="/">
        <Image
          src="logo-long.svg"
          alt="JP Green Energy logo"
          width={195}
          height={67}
        />
      </NavLink>

      <Box as={S.Nav} row alignItems="stretch">
        <NavLink to="/">Domov</NavLink>
        <NavLink to="/solarna-energia">Solárna energia</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
        <NavLink to="/produkty">Produkty</NavLink>
        <NavLink to="/sluzby">Služby</NavLink>
      </Box>
    </Container>
  </Box>
)

export default React.memo(Navigation)
