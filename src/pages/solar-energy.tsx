import { type GetStaticProps } from 'next'
import { memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Head from 'next/head'

import { Box, Button, Container, Icon, Light, Text, Video } from '~/ui'
import { List } from '~/components'
import { TITLE } from '~/constants/global'

import solarPanelImage from 'assets/images/solar-panel-1.png'

const SolarEnergy: NextPageWithProps = ({ _nextI18Next }) => {
  const { t } = useTranslation(_nextI18Next?.ns)
  const router = useRouter()

  // TODO: change to link
  const navigateTo = useCallback(
    (to: string) => () => void router.push(to),
    [router]
  )

  return (
    <>
      <Head>
        <title>{`${t('global:navigation.solarEnergy')} | ${TITLE}`}</title>
      </Head>

      <Box
        as="header"
        css={{
          paddingTop: '$section',
          paddingBottom: '$section',
          justifyContent: 'center',

          '@tablet': { paddingTop: '$top', minHeight: '100vh' },
          '@largeDesktop': { paddingTop: 200 },
        }}
      >
        <Container
          css={{
            alignItems: 'center',
            gap: '$11',

            '@tablet': { marginBottom: 0 },
            '@desktop': { flexDirection: 'row', gap: 0 },
          }}
        >
          <Box as="article" css={{ zIndex: 1 }}>
            <Text
              as="h1"
              variant="heading2"
              css={{
                marginBottom: '$5',
                '@tablet': { marginBottom: '$7' },
                '@desktop': { marginBottom: '$8' },
              }}
            >
              {t('solarEnergy:header.title')}
            </Text>

            <Text
              css={{
                marginBottom: '$8',
                '@tablet': { marginBottom: '$10' },
                '@desktop': { marginBottom: '$12', maxWidth: '80%' },
              }}
            >
              {t('solarEnergy:header.body')}
            </Text>

            <Box
              css={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '$7',

                '@desktop': { gap: '$8' },

                button: {
                  flex: 1,

                  '@desktop': {
                    flex: 0,
                  },
                },
              }}
            >
              <Button onClick={navigateTo('/products')}>
                {t('global:navigation.products')}
              </Button>

              <Button onClick={navigateTo('/services')} secondary>
                {t('global:navigation.services')}
              </Button>
            </Box>
          </Box>

          <Box
            css={{
              position: 'relative',
              paddingTop: '$13',
              zIndex: 0,

              '@media (min-width: 1800px)': {
                marginLeft: '-8%',
                marginRight: '-6%',
              },

              '@media (max-width: 1800px)': {
                marginLeft: '-10%',
              },

              '@media (max-width: 1500px)': {
                marginLeft: '-14%',
                paddingTop: 0,
              },

              '@media (max-width: 1170px)': {
                marginLeft: '-21%',
              },

              '@desktop': {
                marginLeft: 0,
              },

              img: {
                width: '100%',
                height: 'auto',

                '@desktop': {
                  width: 'clamp(366px, 50vw + 1rem, 984px)',
                },
              },
            }}
          >
            <Image
              src={solarPanelImage}
              alt={t('solarEnergy:header.image.alt') || ''}
              width={984}
              height={566}
              placeholder="blur"
              priority
            />

            <Light
              size={522}
              css={{ backgroundColor: '$secondary', bottom: -240, right: -177 }}
            />
          </Box>
        </Container>
      </Box>

      <Box
        as="section"
        css={{
          marginBottom: '$11',
          zIndex: '$base',
          '@tablet': { marginBottom: '$13' },
        }}
      >
        <Container>
          <Box
            as="article"
            css={{
              gap: '$8',

              '@desktop': { flexDirection: 'row' },

              '& > *': {
                flex: 1,
              },
            }}
          >
            <Text
              as="h2"
              variant="heading2"
              css={{
                marginBottom: '$8',
                maxWidth: '20ch',

                '@largeDesktop': { marginBottom: 0 },
              }}
            >
              {t('solarEnergy:aboutUs.title')}
            </Text>

            <Text css={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>
              {t('solarEnergy:aboutUs.body')}
            </Text>
          </Box>
        </Container>
      </Box>

      <Box
        as="section"
        css={{
          position: 'relative',
          marginBottom: '$section',
        }}
      >
        <Container>
          <Video
            src="solar-energy.mp4"
            disableWebm
            playsInline
            playInView
            muted
            controls
            loop
            css={{
              minHeight: 422,
              objectFit: 'cover',
              borderRadius: '$12',
            }}
          />
        </Container>

        <Light
          size={581}
          css={{ backgroundColor: '$primary', top: 112, right: -291 }}
        />
      </Box>

      <Box
        as="section"
        css={{
          position: 'relative',
          marginBottom: '$section',
        }}
      >
        <Container
          css={{
            justifyContent: 'space-around',
            gap: '$big',

            '@tablet': {
              flexDirection: 'row',
              gap: '$8',
            },
          }}
        >
          <Box
            as="article"
            css={{
              gap: '$7',
              alignItems: 'center',

              '@tablet': { gap: '$8' },
            }}
          >
            <Icon name="box-icon" width={65} height={65} />

            <Text
              variant="button"
              css={{
                textAlign: 'center',
                lineHeight: '30px',
                textTransform: 'uppercase',
                maxWidth: '60%',

                '@desktop': { maxWidth: '75%' },
              }}
            >
              {t('solarEnergy:icons.first')}
            </Text>
          </Box>

          <Box
            as="article"
            css={{
              gap: '$7',
              alignItems: 'center',

              '@tablet': { gap: '$8' },
            }}
          >
            <Icon name="town-icon" width={98} height={74} />

            <Text
              variant="button"
              css={{
                textAlign: 'center',
                lineHeight: '30px',
                textTransform: 'uppercase',
                maxWidth: '75%',
              }}
            >
              {t('solarEnergy:icons.second')}
            </Text>
          </Box>

          <Box
            as="article"
            css={{
              gap: '$7',
              alignItems: 'center',

              '@tablet': { gap: '$8' },
            }}
          >
            <Icon name="euro-icon" width={63} height={63} />

            <Text
              variant="button"
              css={{
                textAlign: 'center',
                lineHeight: '30px',
                textTransform: 'uppercase',
                maxWidth: '45%',

                '@desktop': { maxWidth: '75%' },
              }}
            >
              {t('solarEnergy:icons.third')}
            </Text>
          </Box>
        </Container>

        <Light
          size={581}
          css={{ backgroundColor: '$secondary', top: -300, left: -124 }}
        />
      </Box>

      <Box as="section" css={{ marginBottom: '$section' }}>
        <Container
          css={{
            flexDirection: 'column-reverse',
            alignItems: 'center',
            gap: '$12',

            '@desktop': { gap: '$11', flexDirection: 'row' },

            '& > *': {
              flex: 1,
            },
          }}
        >
          <Box
            as={Image}
            src="/assets/images/solar-panel-2.png"
            alt={t('solarEnergy:portfolio.image.alt') || ''}
            loading="lazy"
            width={779}
            height={470}
            css={{
              width: '100%',
              height: 'auto',

              '@desktop': {
                width: 'clamp(360px, 50vw + 1rem, 779px)',
              },
            }}
          />

          <Box
            css={{
              width: '100%',
              '@desktop': { width: 'auto' },
            }}
          >
            <Text
              as="h2"
              variant="heading2"
              css={{
                marginBottom: '$8',
                '@desktop': { marginBottom: '$12' },
              }}
            >
              {t('solarEnergy:portfolio.title')}
            </Text>

            <List
              items={
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                (t('solarEnergy:portfolio.list', {
                  returnObjects: true,
                }) as string[]) || []
              }
            />
          </Box>
        </Container>
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
    ['global', 'solarEnergy']
  )

  return { props: translations }
}

export default memo(SolarEnergy)
