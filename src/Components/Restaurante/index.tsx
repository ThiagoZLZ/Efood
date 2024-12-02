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
  tipo: string[]
  destaque?: boolean
  link?: string
  tagContent?: string
  destacado: boolean
  foto: string
}

const Restaurant = ({
  titulo,
  avaliacao,
  descricao,
  capa,
  foto,
  tipo,
  destaque,
  id,
  link,
  tagContent = 'Saiba mais'
}: Props) => {
  return (
    <>
      <Card>
        <StyledLink to={link || '#'}>
          <CardImage>
            <img src={capa} alt="Foto do restaurante" />
          </CardImage>
          <CardInfos>
            <Infos>
              {destaque && <Tag size="big">Destaque da semana</Tag>}
              {tipo.map((tipo) => (
                <Tag size="small" key={tipo}>
                  {tipo}
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
    </>
  )
}

export default Restaurant
