import { type GetStaticProps } from 'next'
import { memo } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Box, Container, MetaHead, Text } from '~/ui'

import aboutUsImage from 'assets/images/about-us.jpeg'

const AboutUs: NextPageWithProps = ({ _nextI18Next }) => {
  const { t } = useTranslation(_nextI18Next?.ns)
  const { locale } = useRouter()

  return (
    <>
      <MetaHead t={t} lang={locale} ns="aboutUs" />

      <Box
        as="section"
        css={{
          position: 'relative',
          minHeight: '100vh',
          paddingBlock: '$section',

          '@tablet': { paddingTop: '$top' },
        }}
      >
        <Container>
          <Box as="header" css={{ marginBottom: '$9' }}>
            <Text as="h1" variant="heading1">
              {t('aboutUs:description.title')}
            </Text>
          </Box>

          <Box
            as="article"
            css={{
              gap: '$11',
              '& > *': { flex: 1 },
              '@desktop': { flexDirection: 'row' },
            }}
          >
            <Box
              as={Image}
              src={aboutUsImage}
              alt={t('aboutUs:description.image.alt') || ''}
              width={782}
              height={474}
              css={{
                width: '100%',
                height: 'auto',
                alignSelf: 'flex-start',
                borderRadius: '$5',
              }}
              priority
              placeholder="blur"
            />

            <Text
              css={{
                whiteSpace: 'pre-line',
                textAlign: 'justify',
              }}
            >
              {t('aboutUs:description.body')}
            </Text>
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
    ['global', 'aboutUs']
  )

  return { props: translations }
}

export default memo(AboutUs)
