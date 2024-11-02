import RestaurantList from '../../Components/ProductList'
import Restaurantes from '../../Models/Restaurantes'
import Banner from '../../Components/Banner'
import HeaderPratos from '../../Components/HeaderPratos'
import Footer from '../../Components/Footer'

import fachadaJaponesa from '../../assets/images/fachadaJapones.jpg'
import japonesa from '../../assets/images/imagem.png'
import japonesa1 from '../../assets/images/Japonesa/Japonesa01.jpg'
import japonesa2 from '../../assets/images/Japonesa/Japonesa02.jpg'
import japonesa3 from '../../assets/images/Japonesa/Japonesa03.jpg'
import japonesa4 from '../../assets/images/Japonesa/Japonesa04.jpg'

const promomocoes: Restaurantes[] = [
  {
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '',
    capa: japonesa,
    infos: ['Japonesa'],
    id: 1,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '',
    capa: japonesa1,
    infos: [],
    id: 2,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '',
    capa: japonesa2,
    infos: [],
    id: 3,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '4,9',
    capa: japonesa3,
    infos: [],
    id: 4,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '4,9',
    capa: japonesa4,
    infos: [],
    id: 5,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '4,9',
    capa: japonesa2,
    infos: [],
    id: 6,
    tagContent: 'Adicionar ao carrinho'
  }
]

const PratosJaponeses = () => (
  <>
    <HeaderPratos />
    <Banner
      imagem={fachadaJaponesa}
      comida="Japonesa"
      texto="Japonês de Verdade"
    />
    <RestaurantList Restaurantes={promomocoes} />
    <Footer />
  </>
)

export default PratosJaponeses
