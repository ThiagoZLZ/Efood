import { Imagem, Texto, Comida } from './styles'

type BannerImagem = {
  imagem: string
  texto: string
  comida: string
}

// import bannerImg from '../../assets/images/heroImgPerfil.png'

const Banner = ({ imagem, texto, comida }: BannerImagem) => (
  <Imagem imagem={imagem}>
    <div className="container">
      <Comida>{comida}</Comida>
      <Texto>{texto}</Texto>
    </div>
  </Imagem>
)
export default Banner
