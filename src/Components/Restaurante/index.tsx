import estrela from '../../assets/icons/estrela.png'

import * as S from './styles'

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
  id,
  link
}: Props) => {
  return (
    <>
      <S.Card>
        <S.StyledLink to={link || '#'}>
          <S.CardImage>
            <img src={capa} alt="Foto do restaurante" />
            {tipo.includes('italiana') && (
              <S.TagDestaque>Destaque da semana</S.TagDestaque>
            )}
            <S.TagNacionalidade>{tipo}</S.TagNacionalidade>
          </S.CardImage>
          <S.CardInfos>
            <S.CardHeader>
              <h3>{titulo}</h3>
              <div>
                <h3>{avaliacao}</h3>
                <img src={estrela} alt="avaliação" />
              </div>
            </S.CardHeader>
            <p>{descricao}</p>
            <S.ButtonLink to={`/pratos/${id}`}>Saiba mais</S.ButtonLink>
          </S.CardInfos>
        </S.StyledLink>
      </S.Card>
    </>
  )
}

export default Restaurant
