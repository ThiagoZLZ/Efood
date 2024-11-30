import RestaurantList from '../../Components/ProductList'
import Banner from '../../Components/Banner'
import HeaderPratos from '../../Components/HeaderPratos'

import fachadaItaliano from '../../assets/images/heroImgPerfil.png'
import pizza from '../../assets/images/pizza.png'
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
      <Banner
        imagem={fachadaItaliano}
        comida="Italiana"
        texto="La Dolce Vita Trattoria"
      />
      <div className="container">
        <RestaurantList
          Restaurantes={promomocoes}
          Pratos={true}
          PratosF={true}
        />
      </div>
      <Footer />
    </>
  )
}

export default PratosItalianos
