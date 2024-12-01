import { useState, useEffect } from 'react'
import { Imagem, Texto, Comida } from './styles'
import { Restaurante } from '../../Pages/Home'

const Banner = () => {
  const [pratos, setPratos] = useState<Restaurante | null>(null) // Inicia como 'null'

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setPratos(data[0]) // Assume que pega o primeiro restaurante como exemplo
      })
  }, [])

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
