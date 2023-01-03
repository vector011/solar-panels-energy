import React, { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

import { Box, Button, Container, Text, Video } from 'ui'
import { useScrollPosition } from 'hooks'
import { getRoute } from 'config/router'

import * as S from './styled'

const Home = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const position = useScrollPosition(0.5)

  const toSolarPanels = useCallback(
    () => navigate(getRoute('solar-energy')),
    [navigate]
  )

  const translate = useMemo(() => {
    const offset = window.innerHeight * 0.5

    return {
      first: 0.3 * position,
      second: 0.3 * (position - offset),
    }
  }, [position])

  return (
    <>
      <Box as="section" position="relative" minh="100vh" w="100vw">
        <Video
          src="homepage-1.mp4"
          playsInline
          fullHeight
          cover
          playInView
          muted
          loop
        />

        <Box
          as={S.Overlay}
          absolute
          inset={0}
          justifyContent="center"
          css={S.navOverlay}
        >
          <Container
            alignItems="center"
            style={{ transform: `translateY(${translate.first}px)` }}
          >
            <Text
              as="h1"
              variant="homepage"
              textAlign="center"
              maxw="18ch"
              mb="s"
              tablet={{ mb: 'm' }}
              desktop={{ mb: 'l' }}
            >
              {t('home:video1.title')}
            </Text>

            <Text as="h2" variant="subheading2" textAlign="center" maxw="40ch">
              {t('home:video1.subtitle')}
            </Text>
          </Container>
        </Box>
      </Box>

      <Box height={8} backgroundColor="light" />

      <Box as="section" position="relative" minh="100vh" w="100vw">
        <Video
          src="homepage-2.mp4"
          playsInline
          fullHeight
          cover
          playInView
          muted
          loop
        />

        <Box as={S.Overlay} absolute inset={0} justifyContent="center">
          <Container
            alignItems="center"
            style={{ transform: `translateY(${translate.second}px)` }}
          >
            <Text
              as="h1"
              variant="homepage"
              textAlign="center"
              maxw="25ch"
              mb="s"
              tablet={{ mb: 'm' }}
              desktop={{ mb: 'l' }}
            >
              {t('home:video2.title')}
            </Text>

            <Text as="h2" variant="subheading2" textAlign="center" maxw="55ch">
              {t('home:video2.subtitle')}
            </Text>

            <Button onClick={toSolarPanels}>
              {t('global:button.findOutMore')}
            </Button>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default React.memo(Home)
