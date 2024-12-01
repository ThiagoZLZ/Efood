import Home from '../../Components/Header'
import RestaurantList from '../../Components/ProductList'

import Footer from '../../Components/Footer'
import { useEffect, useState } from 'react'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: string
  capa: string
  descricao: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Homep = () => {
  const [promomocoes, setPromomocoes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPromomocoes(res))
  }, [])

  return (
    <>
      <Home />
      <RestaurantList Restaurantes={promomocoes} />
      <Footer />
    </>
  )
}

export default Homep
