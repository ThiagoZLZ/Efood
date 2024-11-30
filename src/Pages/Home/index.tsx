import Home from '../../Components/Header'
import RestaurantList from '../../Components/ProductList'

import japonesa from '../../assets/images/imagem.png'
import italiana from '../../assets/images/image1.png'

import Footer from '../../Components/Footer'
import { useEffect, useState } from 'react'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: string
  capa: string
  cardapio: string
  nome: string
  descricao: string
  porcao: string
  foto: string
  preco: number
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
