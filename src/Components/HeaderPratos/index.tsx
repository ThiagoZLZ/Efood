import logo from '../../assets/icons/logo.png'
import { HeaderStyle, Branding, LinkRestaurantes, TextCart } from './styles'

const HeaderPratos = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
        <Branding src={logo} alt="Logo do restaurante" />
        <TextCart> no carrinho </TextCart>
      </div>
    </HeaderStyle>
  )
}

export default HeaderPratos
