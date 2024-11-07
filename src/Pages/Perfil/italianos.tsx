import RestaurantList from '../../Components/ProductList'
import Restaurantes from '../../Models/Restaurantes'
import Banner from '../../Components/Banner'
import HeaderPratos from '../../Components/HeaderPratos'

import fachadaItaliano from '../../assets/images/heroImgPerfil.png'
import pizza from '../../assets/images/pizza.png'
import Footer from '../../Components/Footer'

const promomocoes: Restaurantes[] = [
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: pizza,
    infos: [],
    id: 1,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  },
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: pizza,
    infos: [],
    id: 2,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  },
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: pizza,
    infos: [],
    id: 3,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  },
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: pizza,
    infos: [],
    id: 4,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  },
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: pizza,
    infos: [],
    id: 5,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  },
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: pizza,
    infos: [],
    id: 6,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  }
]

const PratosJaponeses = () => (
  <>
    <HeaderPratos />
    <Banner
      imagem={fachadaItaliano}
      comida="Italiana"
      texto="La Dolce Vita Trattoria"
    />
    <RestaurantList Restaurantes={promomocoes} Pratos={true} PratosF={true} />
    <Footer />
  </>
)

export default PratosJaponeses
