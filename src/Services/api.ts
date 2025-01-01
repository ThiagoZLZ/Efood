import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../Pages/Home'

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
    })
  })
})

export const { useGetFeatureEfoodQuery, useGetHomePageQuery } = api

export default api
