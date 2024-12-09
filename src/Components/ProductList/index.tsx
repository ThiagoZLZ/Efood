import Product from '../Product'
import { List } from './styles'
import { CardapioItem } from '../../Pages/Home'

export type Props = {
  title?: string
  CardapioItem: CardapioItem[]
  Pratos?: boolean
}

const ProductList = ({ title, CardapioItem, Pratos }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <List className={Pratos ? 'pratos-japoneses' : ''}>
        {CardapioItem.map((Item) => (
          <li key={Item.id}>
            <Product
              descricao={Item.descricao}
              id={Item.id}
              foto={Item.foto}
              nome={Item.nome}
              porcao={Item.porcao}
              preco={Item.preco}
            />
          </li>
        ))}
      </List>
    </div>
  )
}

export default ProductList
