import { useDispatch, useSelector } from 'react-redux'
import pizza from '../../assets/images/Italiana/Lasanha.jpg'
import { close, remove } from '../../Store/reducers/cart'
import { formataPreco } from '../Product'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Price,
  Total,
  CartItem,
  Botao
} from './styles'
import { RootReducer } from '../../Store'

const Card = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const precoTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const remover = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <Price>{formataPreco(item.preco)}</Price>
                <button onClick={() => remover(item.id)} />
              </div>
            </CartItem>
          ))}
        </ul>
        <Total>
          valor total <span>{formataPreco(precoTotal())}</span>
        </Total>
        <Botao>Continuar com a entrega</Botao>
      </Sidebar>
    </CartContainer>
  )
}

export default Card
