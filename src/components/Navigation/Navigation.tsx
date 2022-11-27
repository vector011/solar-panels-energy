import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'

import { Box, Container, Icon, Logo } from 'ui'
import { useBodyNoScroll, useToggle } from 'hooks'

import * as S from './styled'
import { getRoute } from 'config/router'

const NavItems = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavLink to={getRoute('home')}>{t('global:navigation.home')}</NavLink>

      <NavLink to={getRoute('solar-energy')}>
        {t('global:navigation.solarEnergy')}
      </NavLink>

      <NavLink to={getRoute('contact')}>
        {t('global:navigation.contact')}
      </NavLink>

      <NavLink to={getRoute('products')}>
        {t('global:navigation.products')}
      </NavLink>

      <NavLink to={getRoute('services')}>
        {t('global:navigation.services')}
      </NavLink>
    </>
  )
}

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
