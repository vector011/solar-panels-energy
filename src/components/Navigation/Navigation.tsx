import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'

import { Box, Container, Icon, Logo } from 'ui'
import { useBodyNoScroll, useToggle } from 'hooks'

import * as S from './styled'

const NavItems = () => (
  <>
    <NavLink to="/">Domov</NavLink>
    <NavLink to="/solarna-energia">Solárna energia</NavLink>
    <NavLink to="/kontakt">Kontakt</NavLink>
    <NavLink to="/produkty">Produkty</NavLink>
    <NavLink to="/sluzby">Služby</NavLink>
  </>
)

const Navigation = () => {
  const location = useLocation()

  const { visible, toggle, hide } = useToggle()

  const [disableScroll, enableScroll] = useBodyNoScroll()

  useEffect(() => {
    if (visible) disableScroll()
    else enableScroll()
  }, [visible, disableScroll, enableScroll])

  useEffect(hide, [location, hide])

  return (
    <Box absolute inset={0} zIndex="nav" bottom="auto" paddingVertical="xl">
      <Container
        justifyContent="space-between"
        alignItems="center"
        gap="3xl"
        row
      >
        <Logo responsive />

        <S.Nav>
          <NavItems />
        </S.Nav>

        <S.MobileNav {...{ visible }}>
          <NavItems />
        </S.MobileNav>

        <S.Burger onClick={toggle} {...{ visible }}>
          <Icon name="burger-icon" width={35} height={27} />
        </S.Burger>
      </Container>
    </Box>
  )
}

export default React.memo(Navigation)
