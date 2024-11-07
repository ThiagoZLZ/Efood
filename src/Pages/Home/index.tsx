import Home from '../../Components/Header'
import RestaurantList from '../../Components/ProductList'
import Restaurantes from '../../Models/Restaurantes'

import japonesa from '../../assets/images/imagem.png'
import italiana from '../../assets/images/image1.png'

import Footer from '../../Components/Footer'

const promomocoes: Restaurantes[] = [
  {
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    avaliacao: '4.9',
    capa: japonesa,
    infos: ['Japonesa'],
    destaque: true,
    id: 1,
    link: '/pratosjaponeses'
  },
  {
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    avaliacao: '4.6',
    capa: italiana,
    infos: ['Italiana'],
    destaque: false,
    id: 2,
    link: '/pratositalianos'
  },
  {
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    avaliacao: '4.6',
    capa: italiana,
    infos: ['Italiana'],
    destaque: false,
    id: 3,
    link: '/pratosmexicanos'
  },
  {
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    avaliacao: '4.6',
    capa: italiana,
    infos: ['Italiana'],
    destaque: false,
    id: 4,
    link: '/brasileiros'
  },
  {
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    avaliacao: '4.6',
    capa: italiana,
    infos: ['Italiana'],
    destaque: false,
    id: 5,
    link: '/italinos'
  },
  {
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    avaliacao: '4.6',
    capa: italiana,
    infos: ['Italiana'],
    destaque: false,
    id: 6,
    link: '/portugueses'
  }
]

const Homep = () => (
  <>
    <Home />
    <RestaurantList Restaurantes={promomocoes} />
    <Footer />
  </>
)

export default Homep
