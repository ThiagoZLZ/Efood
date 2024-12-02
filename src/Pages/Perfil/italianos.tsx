import Product from '../../Components/Product'
import Banner from '../../Components/Banner'
import HeaderPratos from '../../Components/HeaderPratos'

import Footer from '../../Components/Footer'
import { useEffect, useState } from 'react'
import ProductList from '../../Components/ProductList'

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

const PratosItalianos = () => {
  const [promomocoes, setPromomocoes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPromomocoes(res))
  }, [])

  return (
    <>
      <HeaderPratos />
      <Banner />
      <div className="container">
        <ProductList Restaurantes={promomocoes} Pratos={true} PratosF={true} />
      </div>
      <Footer />
    </>
  )
}

export default PratosItalianos
