import { type GetStaticProps } from 'next'
import { memo, useCallback, useRef } from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AnimatePresence } from 'framer-motion'
import { omit } from 'lodash'

import {
  Box,
  Button,
  Container,
  Filter,
  Grid,
  Light,
  MetaHead,
  Search,
  Text,
} from '~/ui'
import { Panel, PanelSkeleton, Popup } from '~/components'
import { usePageOffset, useToggle } from '~/hooks'
import useProductStore from '~/stores/products'

import client from '~/apollo'
import {
  type CategoriesData,
  type CategoriesPayload,
  GET_CATEGORIES,
  type ProductsPayload,
  type ProductsData,
  GET_PRODUCTS,
} from '~/apollo/queries'

type TProps = {
  categories: CategoriesPayload['categories']
}

const Products: NextPageWithProps<TProps> = ({ _nextI18Next, categories }) => {
  const { t } = useTranslation(_nextI18Next?.ns)
  const { replace, locale, defaultLocale, query } = useRouter()

  const { products, clear } = useProductStore()
  const { visible, show, hide } = useToggle()

  const ref = useRef<HTMLDivElement | null>(null)
  usePageOffset(ref)

  const { data, loading } = useQuery<ProductsPayload, ProductsData>(
    GET_PRODUCTS,
    {
      variables: {
        locale: locale || defaultLocale || '',
        skip: 0,
        where: {
          ...(query['category'] && {
            category: { slug: query['category'] as string },
          }),
          ...(query['search'] && {
            name_contains: query['search'] as string,
          }),
        },
      },
    }
  )

  const handleSearch = useCallback(
    (value: string) => {
      const newQuery = value
        ? { ...query, search: value }
        : omit(query, 'search')

      void replace({ query: newQuery }, undefined, { shallow: true })
    },
    [replace, query]
  )

  const renderItems = useCallback(
    (item: ProductsPayload['products'][number], idx: number) => (
      <Panel
        key={`product-${item?.id}-${locale || ''}`}
        transition={{ delay: idx * 0.1 }}
        data={item}
      />
    ),
    [locale]
  )

  return (
    <>
      <MetaHead t={t} lang={locale} ns="products" />

      <AnimatePresence>{visible && <Popup onClose={hide} />}</AnimatePresence>

      <Box
        as="section"
        css={{
          position: 'relative',
          paddingTop: '$section',
          marginBottom: '$block',
          '@tablet': { paddingTop: '$top' },
        }}
      >
        <Container>
          <Box as="header">
            <Text as="h1" variant="heading1" css={{ marginBottom: '$8' }}>
              {t('products:benefits.title')}
            </Text>

            <Text>{t('products:benefits.body')}</Text>
          </Box>
        </Container>
      </Box>

      <Box
        as="section"
        css={{ position: 'relative', marginBottom: '$section' }}
      >
        <Light
          size={581}
          css={{ backgroundColor: '$secondary', top: 0, right: -296 }}
        />

        <Container>
          <Box
            css={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '$14',
              columnGap: '$14',
              rowGap: '$8',
              flexWrap: 'wrap',
            }}
          >
            <Box css={{ flex: 1, flexShrink: 0 }}>
              <Filter param="category" items={categories} />
            </Box>

            <Search
              name="search"
              placeholder={t('products:filter.search') || 'Search'}
              initial={query['search'] as string}
              cb={handleSearch}
            />
          </Box>

          <AnimatePresence>
            {loading && !data?.products?.length ? (
              <Grid>
                <PanelSkeleton transition={{ delay: 0.1 }} />
                <PanelSkeleton transition={{ delay: 0.2 }} />
                <PanelSkeleton transition={{ delay: 0.3 }} />
                <PanelSkeleton transition={{ delay: 0.4 }} />
              </Grid>
            ) : !loading && !!data?.products?.length ? (
              <Grid>{data?.products?.map(renderItems)}</Grid>
            ) : (
              <Box css={{ alignItems: 'center' }}>
                <Text variant="paragraph">{t('products:panels.empty')}</Text>
              </Box>
            )}
          </AnimatePresence>

          {!!Object.keys(products)?.length && (
            <Box css={{ paddingTop: '$8' }}>
              <Text
                as="button"
                variant="button"
                css={{ textDecoration: 'underline' }}
                onClick={clear}
              >
                {t('products:panels.reset')}
              </Text>
            </Box>
          )}
        </Container>
      </Box>

      <Box
        ref={ref}
        css={{
          position: 'fixed',
          backgroundColor: '$dark',
          alignItems: 'center',
          inset: 0,
          top: 'auto',
          zIndex: '$fg',
          padding: '$6',
        }}
      >
        <Button onClick={show} wide>
          {t('products:panels.button')}
        </Button>
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
    ['global', 'products', 'components']
  )

  const { data } = await client.query<CategoriesPayload, CategoriesData>({
    query: GET_CATEGORIES,
    variables: { locale: locale || defaultLocale || '' },
  })

  return {
    props: {
      ...translations,
      categories: data?.categories || null,
    },
  }
}

export default memo(Products)
