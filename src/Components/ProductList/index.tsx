import Product from '../Product'
import { List } from './styles'
import { Restaurante } from '../../Pages/Home'

export type Props = {
  title?: string
  Restaurantes: Restaurante[]
  Pratos?: boolean
  PratosF?: boolean
}

const ProductList = ({ title, Restaurantes, Pratos }: Props) => (
  <div>
    <h2>{title}</h2>
    <List className={Pratos ? 'pratos-japoneses' : ''}>
      {Restaurantes.map((Restaurantes) => (
        <Product
          key={Restaurantes.id}
          descricao={Restaurantes.cardapio.descricao}
          id={Restaurantes.cardapio.id}
          foto={Restaurantes.cardapio.foto}
          nome={Restaurantes.cardapio.nome}
          porcao={Restaurantes.cardapio.porcao}
          preco={Restaurantes.cardapio.preco}
        />
      ))}
    </List>
  </div>
)

export default ProductList
