import Home from '../../Components/Header'
import RestaurantList from '../../Components/ProductList'
import Restaurantes from '../../Models/Restaurantes'

import japonesa from '../../assets/images/CapaJaponesa.webp'
import italiana from '../../assets/images/image1.png'
import mexicana from '../../assets/images/CapaMexicana.jpg'
import brasileira from '../../assets/images/CapaBrasileira.jpg'
import arabe from '../../assets/images/CapaArabe.jpg'
import Francesa from '../../assets/images/CapaFrança.jpg'

import Footer from '../../Components/Footer'

const promomocoes: Restaurantes[] = [
  {
    titulo: 'Culinária Japonesa',
    descricao:
      'Com pratos como sushi, sashimi, tempura e ramen, a culinária japonesa é conhecida pelo frescor e pela delicadeza dos ingredientes, focando muito na apresentação. A tradição dos pratos, como a utilização de peixe cru, é uma marca cultural importante.',
    avaliacao: '4.9',
    capa: japonesa,
    infos: ['Japonesa'],
    destaque: true,
    id: 1,
    link: '/pratosjaponeses'
  },
  {
    titulo: 'Culinária Italiana',
    descricao:
      'Famosa por suas massas, pizzas, risotos e queijos, a culinária italiana é simples, mas repleta de sabores. Pratos como espaguete à bolonhesa, lasanha, e a clássica pizza margherita são apreciados em todo o mundo.',
    avaliacao: '4.7',
    capa: italiana,
    infos: ['Italiana'],
    destaque: false,
    id: 2,
    link: '/pratositalianos'
  },
  {
    titulo: 'Culinária Mexicana',
    descricao:
      'A culinária mexicana é vibrante e picante, rica em pratos como tacos, guacamole, enchiladas e burritos. Com ingredientes como milho, feijão, pimenta e abacate, combina sabores intensos e é celebrada por sua autenticidade',
    avaliacao: '4.9',
    capa: mexicana,
    infos: ['Mexicana'],
    destaque: false,
    id: 3,
    link: '/pratosmexicanos'
  },
  {
    titulo: 'Culinária Brasileira',
    descricao:
      'A culinária brasileira mistura influências indígenas, africanas e portuguesas, com pratos típicos como feijoada, moqueca e pão de queijo. Destaca-se pela diversidade regional e pelo uso de ingredientes locais, como mandioca, dendê e coco',
    avaliacao: '4.9',
    capa: brasileira,
    infos: ['Brasileira'],
    destaque: false,
    id: 4,
    link: '/brasileiros'
  },
  {
    titulo: 'Culinaria Árabe',
    descricao:
      'A culinária árabe é rica em temperos como zaatar, cominho e açafrão, com pratos como homus, falafel, tabule e shawarma. Ela combina grãos, carnes e vegetais frescos, valorizando alimentos compartilhados e as refeições em família',
    avaliacao: '4.9',
    capa: arabe,
    infos: ['Árabe'],
    destaque: false,
    id: 5,
    link: '/italinos'
  },
  {
    titulo: 'Culinária Francesa',
    descricao:
      'Considerada sofisticada e uma das bases da culinária ocidental moderna, a culinária francesa é conhecida por pratos como escargot, ratatouille, croissants, e pelo seu uso de molhos complexos. A França é também referência mundial em vinhos e queijos',
    avaliacao: '4.9',
    capa: Francesa,
    infos: ['Francesa'],
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
