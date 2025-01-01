import { useParams } from 'react-router-dom'
import ProductList from '../../Components/ProductList'
import Banner from '../../Components/Banner'
import HeaderPratos from '../../Components/HeaderPratos'
import Footer from '../../Components/Footer'

import { useGetFeatureEfoodQuery } from '../../Services/api'

type PratosParams = {
  id: string
}

const PratosItalianos = () => {
  const { id } = useParams() as PratosParams
  const { data: Cardapio } = useGetFeatureEfoodQuery(id)

  if (Cardapio) {
    return (
      <>
        <HeaderPratos />
        <Banner />
        <div className="container">
          <ProductList CardapioItem={Cardapio?.cardapio ?? []} />
        </div>
        <Footer />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default PratosItalianos
