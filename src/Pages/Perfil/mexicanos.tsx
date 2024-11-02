import RestaurantList from '../../Components/ProductList'
import Restaurantes from '../../Models/Restaurantes'
import Banner from '../../Components/Banner'
import HeaderPratos from '../../Components/HeaderPratos'

import fachadaMexicano from '../../assets/images/fachadaMexicano.avif'
import tacos from '../../assets/images/Mexicana/tacos.jpg'
import Enchiladas from '../../assets/images/Mexicana/Enchiladas.jpg'
import Tamales from '../../assets/images/Mexicana/Tamales.jpg'
import Guacamole from '../../assets/images/Mexicana/Guacamole.jpg'
import Chiles from '../../assets/images/Mexicana/Chiles-en-Nogada.jpg'
import Pozole from '../../assets/images/Mexicana/Pozole.jpg'
import Footer from '../../Components/Footer'

const promomocoes: Restaurantes[] = [
  {
    titulo: 'Tacos',
    descricao:
      'Peça já o melhor da culinária Mexicana no conforto da sua casa! Sushis Tortillas recheadas com carne, frango, peixe ou vegetais, acompanhadas de molhos e guacamole',
    avaliacao: '',
    capa: tacos,
    infos: [],
    id: 1,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Enchiladas',
    descricao:
      'Peça já o melhor da culinária Mexicana no conforto da sua casa! Tortillas recheadas e cobertas com molho de tomate ou pimentão, finalizadas com queijo derretido!',
    avaliacao: '',
    capa: Enchiladas,
    infos: [],
    id: 2,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Tamales',
    descricao:
      'Peça já o melhor da culinária Mexicana no conforto da sua casa! Massa de milho recheada com carne, pimentas ou vegetais, envolta em folhas de milho e cozida no vapor!',
    avaliacao: '',
    capa: Tamales,
    infos: [],
    id: 3,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Guacamole',
    descricao:
      'Peça já o melhor da culinária Mexicana no conforto da sua casa! Purê de abacate temperado com cebola, tomate, coentro e suco de limão!',
    avaliacao: '',
    capa: Guacamole,
    infos: [],
    id: 4,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Chiles en Nogada',
    descricao:
      'Peça já o melhor da culinária Mexicana no conforto da sua casa! Pimentões recheados com carne e frutas, cobertos com molho de nozes e romã!',
    avaliacao: '',
    capa: Chiles,
    infos: [],
    id: 5,
    tagContent: 'Adicionar ao carrinho'
  },
  {
    titulo: 'Pozole',
    descricao:
      'Peça já o melhor da culinária Mexicana no conforto da sua casa! Sopa à base de milho com carne de porco ou frango, temperada com alho, cebola e pimentas.',
    avaliacao: '',
    capa: Pozole,
    infos: [],
    id: 6,
    tagContent: 'Adicionar ao carrinho'
  }
]

const PratosMexicanos = () => (
  <>
    <HeaderPratos />
    <Banner
      imagem={fachadaMexicano}
      comida="Mexicana"
      texto="A melhor PIMENTA do mundo"
    />
    <RestaurantList Restaurantes={promomocoes} />
    <Footer />
  </>
)

export default PratosMexicanos
