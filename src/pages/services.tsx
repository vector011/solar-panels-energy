import { type GetStaticProps } from 'next'
import { memo } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import { Box, Container, Light, MetaHead, Text } from '~/ui'
import { List } from '~/components'

const Services: NextPageWithProps = ({ _nextI18Next }) => {
  const { t } = useTranslation(_nextI18Next?.ns)
  const { locale } = useRouter()

  return (
    <>
      <MetaHead t={t} lang={locale} ns="services" />

      <Box
        as="section"
        css={{
          position: 'relative',
          paddingBlock: '$section',

          '@tablet': { paddingTop: '$top', minHeight: '100vh' },
        }}
      >
        <Container>
          <Box as="header">
            <Text
              as="h1"
              variant="heading1"
              css={{
                marginBottom: '$5',
                '@tablet': { marginBottom: '$7' },
                '@desktop': { marginBottom: '$8' },
              }}
            >
              {t('services:help.title')}
            </Text>
          </Box>

          <Box
            css={{
              maxWidth: '100%',
              '@tablet': { maxWidth: '100%' },
              '@desktop': { maxWidth: '70%' },
              '@largeDesktop': { maxWidth: '57%' },
            }}
          >
            <Text
              css={{
                maxWidth: '100%',
                marginBottom: '$11',
                '@tablet': { marginBottom: '$12' },
                '@desktop': { maxWidth: '100%' },
                '@largeDesktop': { maxWidth: '90%' },
              }}
            >
              {t('services:help.body')}
            </Text>

            <List
              items={
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                (t('services:help.list', {
                  returnObjects: true,
                }) as string[]) || []
              }
            />
          </Box>

          <Light
            size={522}
            css={{ backgroundColor: '$secondary', bottom: -40, right: -177 }}
          />
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
    ['global', 'services']
  )

  return { props: translations }
}

export default memo(Services)
