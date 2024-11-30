import { Imagem, Texto, Comida } from './styles'

import { Restaurante } from '../../Pages/Home/index'

type BannerImagem = {
  imagem: string
  texto: string
  comida: string
}

const Banner = ({ imagem, texto, comida }: BannerImagem) => (
  <Imagem imagem={imagem}>
    <div className="container">
      <Comida>{comida}</Comida>
      <Texto>{texto}</Texto>
    </div>
  </Imagem>
)
export default Banner
