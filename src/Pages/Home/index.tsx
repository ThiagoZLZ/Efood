import { useEffect, useState } from 'react'
import Home from '../../Components/Header'
import RestaurantList from '../../Components/RestaurantList'
import Footer from '../../Components/Footer'

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
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Restaurante[]) => {
        setRestaurantes(res)
      })
  }, [])

  return (
    <>
      <Home />
      <RestaurantList Restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Homep
