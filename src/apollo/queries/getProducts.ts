import { gql } from '@apollo/client'

import { type ProductModel } from '~/types/models'

export type ProductsData = {
  locale: string
  skip: number
  where?: {
    category?: { slug: string }
    name_contains?: string
  }
}

export type ProductsPayload = {
  products: ProductModel[]
}

export default gql`
  query getProducts($locale: Locale!, $skip: Int!, $where: ProductWhereInput) {
    products(
      where: $where
      locales: [$locale]
      orderBy: publishedAt_DESC
      first: 8
      skip: $skip
    ) {
      id
      name
      description
      slug
      createdAt
      image(locales: [sk, en]) {
        id
        url
      }
      parameters(forceParentLocale: true) {
        ... on Parameter {
          id
          text
          icon(forceParentLocale: true) {
            id
            url
          }
        }
      }
      category {
        id
        name
      }
    }
  }
`
