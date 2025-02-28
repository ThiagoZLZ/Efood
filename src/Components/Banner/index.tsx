import * as S from './styles'
import { useParams } from 'react-router-dom'

import { useGetFeatureEfoodQuery } from '../../Services/api'

type Params = {
  id: string
}

const Banner = () => {
  const { id } = useParams<Params>()
  const { data: pratos } = useGetFeatureEfoodQuery(id || '')

  // Exibe um fallback se 'pratos' ainda não foi carregado
  if (!pratos) {
    return <div>Carregando...</div>
  }

  return (
    <S.Imagem style={{ backgroundImage: `url(${pratos.capa})` }}>
      <div className="container">
        <S.Comida>{pratos.tipo}</S.Comida>
        <S.Texto>{pratos.titulo}</S.Texto>
      </div>
    </S.Imagem>
  )
}

export default Banner
