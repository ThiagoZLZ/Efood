import { useEffect, useState } from 'react'
import Home from '../../Components/Header'
import RestaurantList from '../../Components/RestaurantList'
import Footer from '../../Components/Footer'

import { useGetHomePageQuery } from '../../Services/api'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: string
  capa: string
  descricao: string
  cardapio: CardapioItem[]
}

const Homep = () => {
  const { data: restaurantes = [] } = useGetHomePageQuery()

  return (
    <>
      <Home />
      <RestaurantList Restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Homep
