import logo from '../../assets/icons/logo.png'
import { HeaderStyle, Branding, LinkRestaurantes, TextCart } from './styles'

import { open } from '../../Store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'

const HeaderPratos = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderStyle>
      <div className="container">
        <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
        <a href="/">
          <Branding src={logo} alt="Logo do restaurante" />
        </a>
        <TextCart onClick={openCart}>
          {items.length} produto(s) no carrinho
        </TextCart>
      </div>
    </HeaderStyle>
  )
}

export default HeaderPratos
