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
          titulo={Restaurantes.titulo}
          descricao={Restaurantes.descricao}
          avaliacao={Restaurantes.avaliacao}
          capa={Restaurantes.capa}
          id={Restaurantes.id}
          foto={Restaurantes.cardapio.foto}
          nome={Restaurantes.cardapio.nome}
          tipo={Array.isArray(Restaurantes.tipo) ? Restaurantes.tipo : []}
        />
      ))}
    </List>
  </div>
)

export default ProductList
