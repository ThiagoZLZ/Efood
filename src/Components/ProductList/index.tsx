import Restaurantes from '../../Models/Restaurantes'
import Restaurant from '../Product'
import { List } from './styles'

export type Props = {
  title?: string
  Restaurantes: Restaurantes[]
}

const RestaurantList = ({ title, Restaurantes }: Props) => (
  <div>
    <h2>{title}</h2>
    <List>
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
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
