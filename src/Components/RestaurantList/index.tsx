import Restaurant from '../Restaurante'
import { List } from './styles'
import { Restaurante } from '../../Pages/Home'

export type Props = {
  title?: string
  Restaurantes: Restaurante[]
  Pratos?: boolean
  PratosF?: boolean
}

const RestaurantList = ({ title, Restaurantes, Pratos }: Props) => (
  <div>
    <h2>{title}</h2>
    <List className={Pratos ? 'pratos-japoneses' : ''}>
      {Restaurantes.map((Restaurantes) => (
        <Restaurant
          key={Restaurantes.id}
          titulo={Restaurantes.titulo}
          descricao={Restaurantes.descricao}
          avaliacao={Restaurantes.avaliacao}
          capa={Restaurantes.capa}
          destacado={Restaurantes.destacado}
          id={Restaurantes.id}
          tipo={Array.isArray(Restaurantes.tipo) ? Restaurantes.tipo : []}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
