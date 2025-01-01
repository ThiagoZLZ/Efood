import { useState, useEffect } from 'react'
import { Imagem, Texto, Comida } from './styles'
import { Restaurante } from '../../Pages/Home'
import { useParams } from 'react-router-dom'

import { useGetFeatureEfoodQuery } from '../../Services/api'

type Params = {
  id: string
}

const Banner = () => {
  const { id } = useParams<Params>()
  const { data: pratos, isLoading } = useGetFeatureEfoodQuery(id || '')

  // Exibe um fallback se 'pratos' ainda não foi carregado
  if (!pratos) {
    return <div>Carregando...</div>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${pratos.capa})` }}>
      <div className="container">
        <Comida>{pratos.tipo}</Comida>
        <Texto>{pratos.titulo}</Texto>
      </div>
    </Imagem>
  )
}

export default Banner
