import estrela from '../../assets/icons/estrela.png'

import {
  Card,
  CardInfos,
  CardHeader,
  CardImage,
  StyledLink,
  ButtonLink,
  TagDestaque,
  TagNacionalidade
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
}

const Restaurant = ({
  titulo,
  avaliacao,
  descricao,
  capa,
  tipo,
  destaque,
  id,
  link
}: Props) => {
  return (
    <>
      <Card>
        <StyledLink to={link || '#'}>
          <CardImage>
            <img src={capa} alt="Foto do restaurante" />
            {tipo.includes('italiana') && (
              <TagDestaque>Destaque da semana</TagDestaque>
            )}
            <TagNacionalidade>{tipo}</TagNacionalidade>
          </CardImage>
          <CardInfos>
            <CardHeader>
              <h3>{titulo}</h3>
              <div>
                <h3>{avaliacao}</h3>
                <img src={estrela} alt="avaliação" />
              </div>
            </CardHeader>
            <p>{descricao}</p>
            <ButtonLink to={`/pratos/${id}`}>Saiba mais</ButtonLink>
          </CardInfos>
        </StyledLink>
      </Card>
    </>
  )
}

export default Restaurant
