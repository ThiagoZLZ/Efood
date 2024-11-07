import estrela from '../../assets/icons/estrela.png'

import Tag from '../Tag'
import {
  Card,
  CardInfos,
  CardHeader,
  CardImage,
  Infos,
  StyledLink,
  ButtonLink
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
  mostrarEstrela?: boolean
  PratosF?: boolean
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
  tagContent = 'Saiba mais',
  mostrarEstrela = true,
  PratosF = false
}: Props) => (
  <Card PratosF={PratosF}>
    <StyledLink to={link || '#'}>
      <CardImage PratosF={PratosF}>
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
            {mostrarEstrela && <img src={estrela} alt="avaliação" />}
          </div>
        </CardHeader>
        <p>{descricao}</p>
        {PratosF ? (
          <ButtonLink>Adicionar ao Carrinho</ButtonLink>
        ) : (
          <Tag size="medio">{tagContent}</Tag>
        )}
      </CardInfos>
    </StyledLink>
  </Card>
)

export default Restaurant
