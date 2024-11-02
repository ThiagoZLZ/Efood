import estrela from '../../assets/icons/estrela.png'

import Tag from '../Tag'
import {
  Card,
  CardInfos,
  CardHeader,
  CardImage,
  Infos,
  StyledLink
} from './styles'

type Props = {
  titulo: string
  avaliacao: string
  descricao: string
  capa: string
  id: number
  infos: string[]
  destaque?: boolean
  link?: string
  tagContent?: string
}

const Restaurant = ({
  titulo,
  avaliacao,
  descricao,
  capa,
  infos,
  destaque,
  id,
  link,
  tagContent = 'Saiba mais'
}: Props) => (
  <Card>
    <StyledLink to={link || '#'}>
      <CardImage>
        <img src={capa} alt="Foto do restaurante" />
      </CardImage>
      <CardInfos>
        <Infos>
          {destaque && <Tag size="big">Destaque da semana</Tag>}
          {infos.map((info) => (
            <Tag size="small" key={info}>
              {info}
            </Tag>
          ))}
        </Infos>
        <CardHeader>
          <h3>{titulo}</h3>
          <div>
            <h3>{avaliacao}</h3>
            <img src={estrela} alt="avaliação" />
          </div>
        </CardHeader>
        <p>{descricao}</p>
        <Tag size="medio">{tagContent}</Tag>
      </CardInfos>
    </StyledLink>
  </Card>
)

export default Restaurant
