import { type GetStaticProps } from 'next'
import { memo } from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Box, Container, Text } from '~/ui'
import { Form } from '~/components'
import { MAP_SRC, TITLE } from '~/constants/global'

const Contact: NextPageWithProps = ({ _nextI18Next }) => {
  const { t } = useTranslation(_nextI18Next?.ns)

  return (
    <>
      <Head>
        <title>{`${t('global:navigation.contact')} | ${TITLE}`}</title>
      </Head>

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
          <Box as="header">
            <Text as="h1" variant="heading1" css={{ marginBottom: '$8' }}>
              {t('contact:contactForm.title')}
            </Text>
          </Box>

          <Box
            as="article"
            css={{
              gap: '$11',

              '@desktop': { flexDirection: 'row' },

              '& > *': {
                flex: 1,
              },
            }}
          >
            <Box>
              <Text variant="subheading" css={{ marginBottom: '$13' }}>
                {t('contact:contactForm.subtitle')}
              </Text>

              <Form subject={t('contact:contactForm.subject')} />
            </Box>

            <Box
              as="iframe"
              width={600}
              height={400}
              src={MAP_SRC}
              frameBorder="0"
              scrolling="no"
              css={{
                borderRadius: '$5',
                width: '100%',
                minHeight: 400,
              }}
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
    ['global', 'contact', 'components', 'validation']
  )

  return { props: translations }
}

export default memo(Contact)
