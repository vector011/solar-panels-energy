import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import { Box, Container, Icon, Lang, Logo, Text } from '~/ui'
import { useToggle } from '~/hooks'

import * as S from './styled'

const NavItems = () => {
  const { t } = useTranslation()
  const { pathname } = useRouter()

  return (
    <>
      <Text
        as={Link}
        variant="navlink"
        href="/"
        className={pathname === '/' ? 'active' : ''}
      >
        {t('global:navigation.home')}
      </Text>

      <Text
        as={Link}
        variant="navlink"
        href="/solar-energy"
        className={pathname === '/solar-energy' ? 'active' : ''}
      >
        {t('global:navigation.solarEnergy')}
      </Text>

      <Text
        as={Link}
        variant="navlink"
        href="/contact"
        className={pathname === '/contact' ? 'active' : ''}
      >
        {t('global:navigation.contact')}
      </Text>

      <Text
        as={Link}
        variant="navlink"
        href="/products"
        className={pathname === '/products' ? 'active' : ''}
      >
        {t('global:navigation.products')}
      </Text>

      <Text
        as={Link}
        variant="navlink"
        href="/services"
        className={pathname === '/services' ? 'active' : ''}
      >
        {t('global:navigation.services')}
      </Text>

      <Text
        as={Link}
        variant="navlink"
        href="/about-us"
        className={pathname === '/about-us' ? 'active' : ''}
      >
        {t('global:navigation.aboutUs')}
      </Text>

      <Lang />
    </>
  )
}

const Navigation = () => {
  const { pathname } = useRouter()
  const { visible, toggle, hide } = useToggle()

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (visible) hide()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <Box
      css={{
        position: 'absolute',
        inset: 0,
        zIndex: '$nav',
        bottom: 'auto',
        paddingBlock: '$9',
      }}
    >
      <Container
        ref={ref}
        css={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '$11',
        }}
      >
        <Logo responsive />

        <S.Nav>
          <NavItems />
        </S.Nav>

        <AnimatePresence>
          {visible && (
            <Dialog.Root open={visible} onOpenChange={toggle}>
              <Dialog.Overlay forceMount />

              <Dialog.Portal forceMount container={ref.current}>
                <S.MobileNav
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0 }}
                  transition={{ mode: 'linear' }}
                >
                  <NavItems />
                </S.MobileNav>
              </Dialog.Portal>
            </Dialog.Root>
          )}
        </AnimatePresence>

        <S.Burger onClick={toggle} className={visible ? 'visible' : ''}>
          <Icon name="burger-icon" width={35} height={27} />
        </S.Burger>
      </Container>
    </Box>
  )
}

export default React.memo(Navigation)
