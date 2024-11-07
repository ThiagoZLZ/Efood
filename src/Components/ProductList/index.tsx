import Restaurantes from '../../Models/Restaurantes'
import Restaurant from '../Product'
import { List } from './styles'

export type Props = {
  title?: string
  Restaurantes: Restaurantes[]
  Pratos?: boolean
  PratosF?: boolean
}

const RestaurantList = ({ title, Restaurantes, Pratos, PratosF }: Props) => (
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
          infos={Restaurantes.infos}
          destaque={Restaurantes.destaque}
          id={Restaurantes.id}
          link={Restaurantes.link}
          tagContent={Restaurantes.tagContent}
          mostrarEstrela={Restaurantes.mostrarEstrela}
          PratosF={PratosF}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
