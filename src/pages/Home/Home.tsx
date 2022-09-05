import React, { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router'

import { Box, Button, Container, Text, Video } from 'ui'
import { useScrollPosition } from 'hooks'

import * as S from './styled'

const Home = () => {
  const navigate = useNavigate()

  const position = useScrollPosition(0.5)

  const toSolarPanels = useCallback(
    () => navigate('/solarna-energia'),
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
              maxw="25ch"
              mb="s"
              tablet={{ mb: 'm' }}
              desktop={{ mb: 'l' }}
            >
              Prinášame alternatívne ekologické zdroje elektrickej energie
            </Text>

            <Text as="h2" variant="subheading2" textAlign="center" maxw="55ch">
              Dodávame technológie pre výrobu zelenej elektrickej energie,
              príslušenstvo a služby.
            </Text>
          </Container>
        </Box>
      </Box>

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
              Solárne panely
            </Text>

            <Text as="h2" variant="subheading2" textAlign="center" maxw="55ch">
              Fotovoltaika, príslušenstvo a služby.
            </Text>

            <Button onClick={toSolarPanels}>Zistiť viac</Button>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default React.memo(Home)
