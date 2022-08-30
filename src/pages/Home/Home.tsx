import React, { useCallback } from 'react'
import { useNavigate } from 'react-router'

import { Box, Button, Container, Text, Video } from 'ui'
import { useScrollPosition } from 'hooks'

import * as S from './styled'

const Home = () => {
  const navigate = useNavigate()

  const pos = useScrollPosition(0.5)

  const toSolarPanels = useCallback(
    () => navigate('/solarna-energia'),
    [navigate]
  )

  return (
    <>
      <Box as="section" position="relative" minh="100vh" w="100vw">
        <Video src="homepage-1.mp4" fullHeight cover playInView muted loop />

        <Box
          as="article"
          absolute
          inset={0}
          padding="block"
          justifyContent="center"
          css={S.overlay}
        >
          <Container
            alignItems="center"
            style={{ transform: `translateY(${0.3 * pos}px)` }}
          >
            <Text
              as="h1"
              variant="heading1"
              textAlign="center"
              fontWeight={400}
              maxw="90%"
              mb="l"
            >
              Prinášame alternatívne ekologické zdroje elektrickej energie
            </Text>

            <Text as="h2" variant="subheading2" textAlign="center" maxw="50%">
              Dodávame technológie pre výrobu zelenej elektrickej energie,
              príslušenstvo a služby.
            </Text>
          </Container>
        </Box>
      </Box>

      <Box as="section" position="relative" minh="100vh" w="100vw">
        <Video src="homepage-2.mp4" fullHeight cover playInView muted loop />

        <Box
          as="article"
          absolute
          inset={0}
          padding="block"
          justifyContent="center"
          css={S.overlay}
        >
          <Container
            alignItems="center"
            style={{
              transform: `translateY(${
                0.3 * (pos - window.innerHeight * 0.5)
              }px)`,
            }}
          >
            <Text
              as="h1"
              variant="heading1"
              textAlign="center"
              fontWeight={400}
              maxw="90%"
              mb="l"
            >
              Solárne panely
            </Text>

            <Text as="h2" variant="subheading2" textAlign="center" maxw="50%">
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
