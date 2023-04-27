export type AssetModel = {
  id: ID
  url: string
}

export type ParameterComponent = {
  id: ID
  text: string
  icon: AssetModel
}

export type CategoryModel = {
  id: ID
  name: string
  slug: string
  createdAt?: string
}

export type ProductModel = {
  id: ID
  name: string
  description: string
  slug: string
  image: AssetModel
  parameters: ParameterComponent[]
  category: CategoryModel
  createdAt?: string
}
