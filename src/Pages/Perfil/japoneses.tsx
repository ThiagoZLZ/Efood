import RestaurantList from '../../Components/ProductList'
import Restaurantes from '../../Models/Restaurantes'
import Banner from '../../Components/Banner'
import HeaderPratos from '../../Components/HeaderPratos'
import Footer from '../../Components/Footer'

import fachadaJaponesa from '../../assets/images/fachadaJapones.jpg'
import japonesa from '../../assets/images/imagem.png'

const promomocoes: Restaurantes[] = [
  {
    titulo: 'Hioki Sushi',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: japonesa,
    infos: [],
    id: 1,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  },
  {
    titulo: 'Hioki Sushi',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: japonesa,
    infos: [],
    id: 2,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  },
  {
    titulo: 'Hioki Sushi',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: japonesa,
    infos: [],
    id: 3,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  },
  {
    titulo: 'Hioki Sushi',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: japonesa,
    infos: [],
    id: 4,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  },
  {
    titulo: 'Hioki Sushi',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: japonesa,
    infos: [],
    id: 5,
    tagContent: 'Adicionar ao carrinho',
    mostrarEstrela: false
  },
  {
    titulo: 'Hioki Sushi',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    avaliacao: '',
    capa: japonesa,
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
      imagem={fachadaJaponesa}
      comida="Japonesa"
      texto="Japonês de Verdade"
    />
    <RestaurantList Restaurantes={promomocoes} Pratos={true} PratosF={true} />
    <Footer />
  </>
)

export default PratosJaponeses
