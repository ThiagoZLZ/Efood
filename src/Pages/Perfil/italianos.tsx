import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductList from '../../Components/ProductList'
import Banner from '../../Components/Banner'
import HeaderPratos from '../../Components/HeaderPratos'
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
  tipo: string
  avaliacao: string
  capa: string
  descricao: string
  cardapio: CardapioItem[]
}

const PratosItalianos = () => {
  const { id } = useParams<{ id: string }>()
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurante[]) => {
        const restaurante = data.find((r) => r.id === parseInt(id || '', 10))
        if (restaurante) {
          setCardapio(restaurante.cardapio)
        }
      })
  }, [id])

  return (
    <>
      <HeaderPratos />
      <Banner />
      <div className="container">
        <ProductList CardapioItem={cardapio} />
      </div>
      <Footer />
    </>
  )
}

export default PratosItalianos
