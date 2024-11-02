import RestaurantList from '../../Components/ProductList'
import Restaurantes from '../../Models/Restaurantes'
import Banner from '../../Components/Banner'
import HeaderPratos from '../../Components/HeaderPratos'

import acaraje from '../../assets/images/Brasileira/Acarajé.jpg'
import feijoada from '../../assets/images/Brasileira/Feijoada.jpg'
import churrasco from '../../assets/images/Brasileira/Churrasco.webp'
import moqueca from '../../assets/images/Brasileira/Moqueca.png'
import paoDe from '../../assets/images/Brasileira/Pão-de-Queijo.webp'
import vatapa from '../../assets/images/Brasileira/Vatapá.jpg'
import Footer from '../../Components/Footer'

const promomocoes: Restaurantes[] = [
  {
    titulo: 'Acaraje',
    descricao:
      'Peça já o melhor da culinária Brasileira no conforto da sua casa! Bolinho frito de feijão-fradinho recheado com camarão, vatapá e pimenta, famoso na culinária baiana.',
    avaliacao: '',
    capa: acaraje,
    infos: [],
    id: 1,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Feijoada',
    descricao:
      'Peça já o melhor da culinária Brasileira no conforto da sua casa! Um ensopado de feijão preto com carne de porco, tradicionalmente servido com arroz, farofa e couve.',
    avaliacao: '',
    capa: feijoada,
    infos: [],
    id: 2,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Churrasco',
    descricao:
      'Peça já o melhor da culinária Brasileira no conforto da sua casa! Carne assada na brasa, muito popular no Sul, com destaque para cortes bovinos e o preparo em espeto.',
    avaliacao: '',
    capa: churrasco,
    infos: [],
    id: 3,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Moqueca',
    descricao:
      'Peça já o melhor da culinária Brasileira no conforto da sua casa! Ensopado de peixe ou frutos do mar cozido com leite de coco, azeite de dendê e pimentões, típico do Nordeste.',
    avaliacao: '',
    capa: moqueca,
    infos: [],
    id: 4,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Pão de Queijo',
    descricao:
      'Peça já o melhor da culinária Brasileira no conforto da sua casa! Pequenos pães feitos com polvilho e queijo, crocantes por fora e macios por dentro, típicos de Minas Gerais.',
    avaliacao: '',
    capa: paoDe,
    infos: [],
    id: 5,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Vatapá',
    descricao:
      'Peça já o melhor da culinária Brasileira no conforto da sua casa! Creme de pão, camarão, amendoim e dendê, muito comum na Bahia e servido com acarajé ou arroz.',
    avaliacao: '',
    capa: vatapa,
    infos: [],
    id: 6,
    tagContent: 'Adicionar ao carrinho'
  }
]

const PratosBrasileiros = () => (
  <>
    <HeaderPratos />
    <Banner
      imagem={churrasco}
      comida="Brasileira"
      texto="A melhor comida do mundo"
    />
    <RestaurantList Restaurantes={promomocoes} />
    <Footer />
  </>
)

export default PratosBrasileiros
