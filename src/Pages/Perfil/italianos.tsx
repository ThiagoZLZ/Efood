import RestaurantList from '../../Components/ProductList'
import Restaurantes from '../../Models/Restaurantes'
import Banner from '../../Components/Banner'
import HeaderPratos from '../../Components/HeaderPratos'

import fachadaItaliano from '../../assets/images/fachadaItaliano.jpg'
import pizza from '../../assets/images/pizza.png'
import macarrao from '../../assets/images/Macarrao.jpg'
import lasanha from '../../assets/images/Italiana/Lasanha.jpg'
import osso from '../../assets/images/Italiana/Osso Buco.webp'
import alla from '../../assets/images/Italiana/Pasta alla Carbonara.jpg'
import tiramisu from '../../assets/images/Italiana/Tiramisu.webp'
import Footer from '../../Components/Footer'

const promomocoes: Restaurantes[] = [
  {
    titulo: 'Pizza',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '',
    capa: pizza,
    infos: [],
    id: 1,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Espaguete',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '',
    capa: macarrao,
    infos: [],
    id: 2,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Lasanha',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '',
    capa: lasanha,
    infos: [],
    id: 3,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Osso Buco',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '',
    capa: osso,
    infos: [],
    id: 4,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Pasta alla Carbonara',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '',
    capa: alla,
    infos: [],
    id: 5,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Tiramisu',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '',
    capa: tiramisu,
    infos: [],
    id: 6,
    tagContent: 'Adicionar ao carrinho'
  }
]

const PratosJaponeses = () => (
  <>
    <HeaderPratos />
    <Banner
      imagem={fachadaItaliano}
      comida="Italiana"
      texto="A melhor MASA do mundo"
    />
    <RestaurantList Restaurantes={promomocoes} />
    <Footer />
  </>
)

export default PratosJaponeses
