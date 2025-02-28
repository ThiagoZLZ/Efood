import logo from '../../assets/icons/logo.png'
import * as S from './styles'

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
    <S.HeaderStyle>
      <div className="container">
        <S.LinkRestaurantes href="/">Restaurantes</S.LinkRestaurantes>
        <a href="/">
          <S.Branding src={logo} alt="Logo do restaurante" />
        </a>
        <S.TextCart onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.TextCart>
      </div>
    </S.HeaderStyle>
  )
}

export default HeaderPratos
