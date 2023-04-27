import { create } from 'zustand'

import { type ProductModel } from '~/types/models'

type TProduct = Pick<ProductModel, 'name'> & {
  count: number
}

export type TProductState = {
  products: Record<ID, TProduct>
  increment: (data: ProductModel) => () => void
  decrement: (data: ProductModel) => () => void
  clear: () => void
}

const useProductStore = create<TProductState>()((set, get) => ({
  products: {},

  increment: (data) => () => {
    const { products } = get()

    const id = data?.id

    const newProduct: TProduct = {
      name: data.name,
      count: (products?.[id]?.count || 0) + 1,
    }

    products[id] = newProduct

    set({ products })
  },

  decrement: (data) => () => {
    const { products } = get()

    const id = data?.id

    if (!products?.[id]) return

    const newProduct: TProduct = {
      name: products[id]?.name || '',
      count: (products?.[id]?.count || 0) - 1,
    }

    if (newProduct?.count > 0) products[id] = newProduct
    else delete products[id]

    set({ products })
  },

  clear: () => set({ products: {} }),
}))

export default useProductStore
