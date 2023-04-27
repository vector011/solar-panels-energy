import { type GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { memo, useCallback, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Box, Button, Container, MetaHead, Text, Video } from '~/ui'
import { useChangeTranslateByScroll } from '~/hooks'

const Home: NextPageWithProps = ({ _nextI18Next }) => {
  const { t } = useTranslation(_nextI18Next?.ns)
  const router = useRouter()

  const refTop = useRef<HTMLDivElement | null>(null)
  const refBottom = useRef<HTMLDivElement | null>(null)

  useChangeTranslateByScroll(refTop, refBottom, 0.3, 0.3, 0.5)

  const toSolarPanels = useCallback(
    () => void router.push('/solar-energy'),
    [router]
  )

  return (
    <>
      <MetaHead t={t} lang={router.locale} />

      <Box
        as="section"
        css={{
          position: 'relative',
          minHeight: '100vh',
          width: '100vw',
        }}
      >
        <Video
          src="homepage-1.mp4"
          playsInline
          fullHeight
          playInView
          cover
          muted
          loop
        />

        <Box
          as="article"
          css={{
            position: 'absolute',
            inset: 0,
            justifyContent: 'center',
            backgroundColor: '$dark50',
          }}
        >
          <Container ref={refTop} css={{ alignItems: 'center' }}>
            <Text
              as="h1"
              variant="homepage"
              css={{
                textAlign: 'center',
                maxWidth: '18ch',
                marginBottom: '$5',

                '@tablet': {
                  marginBottom: '$7',
                },

                '@desktop': {
                  marginBottom: '$8',
                },
              }}
            >
              {t('home:video1.title')}
            </Text>

            <Text
              as="h2"
              variant="subheading2"
              css={{ textAlign: 'center', maxWidth: '40ch' }}
            >
              {t('home:video1.subtitle')}
            </Text>
          </Container>
        </Box>
      </Box>

      <Box css={{ height: 8, backgroundColor: '$light' }} />

      <Box
        as="section"
        css={{
          position: 'relative',
          minHeight: '100vh',
          width: '100vw',
        }}
      >
        <Video
          src="homepage-2.mp4"
          playsInline
          fullHeight
          cover
          playInView
          muted
          loop
        />

        <Box
          as="article"
          css={{
            position: 'absolute',
            inset: 0,
            justifyContent: 'center',
            backgroundColor: '$dark50',
          }}
        >
          <Container ref={refBottom} css={{ alignItems: 'center' }}>
            <Text
              as="h1"
              variant="homepage"
              css={{
                textAlign: 'center',
                maxWidth: '18ch',
                marginBottom: '$5',

                '@tablet': {
                  marginBottom: '$7',
                },

                '@desktop': {
                  marginBottom: '$8',
                },
              }}
            >
              {t('home:video2.title')}
            </Text>

            <Text
              as="h2"
              variant="subheading2"
              css={{ textAlign: 'center', maxWidth: '40ch' }}
            >
              {t('home:video2.subtitle')}
            </Text>

            <Button
              onClick={toSolarPanels}
              css={{
                minWidth: 222,
                alignSelf: 'center',
                paddingBlock: '$4',
                marginTop: '$7',
              }}
            >
              {t('global:button.findOutMore')}
            </Button>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  const translations = await serverSideTranslations(
    locale || defaultLocale || '',
    ['global', 'home']
  )

  return { props: translations }
}

export default memo(Home)
