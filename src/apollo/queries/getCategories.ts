import { gql } from '@apollo/client'

import { type CategoryModel } from '~/types/models'

export type CategoriesData = {
  locale: string
}

export type CategoriesPayload = {
  categories: CategoryModel[]
}

export default gql`
  query getCategories($locale: Locale!) {
    categories(
      where: { products_some: {} }
      orderBy: name_ASC
      locales: [$locale]
    ) {
      id
      name
      slug
      createdAt
    }
  }
`
