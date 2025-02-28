import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../Pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: 12
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: 123
      expires: {
        month: 12
        year: 1234
      }
    }
  }
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeatureEfood: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getHomePage: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeatureEfoodQuery,
  useGetHomePageQuery,
  usePurchaseMutation
} = api

export default api
