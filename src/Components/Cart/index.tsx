import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../Store/reducers/cart'
import { parseToBrl, precoTotal } from '../Utils'

import * as S from './styles'
import { RootReducer } from '../../Store'
import Checkout from '../checkout'
import { useState } from 'react'

const Card = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [showCheckout, setShowCheckout] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const remover = (id: number) => {
    dispatch(remove(id))
  }

  const mostrarCheckout = () => {
    if (items.length > 0) {
      setShowCheckout(true) // Mostra apenas o componente Checkout
    }
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {showCheckout ? (
          // Exibe apenas o componente Checkout
          <Checkout voltarParaOCarrinho={() => setShowCheckout(false)} />
        ) : (
          // Exibe o conteúdo acima do Checkout
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <S.Price>{parseToBrl(item.preco)}</S.Price>
                        <button onClick={() => remover(item.id)} />
                      </div>
                    </S.CartItem>
                  ))}
                </ul>
                <S.Total>
                  valor total <span>{parseToBrl(precoTotal(items))}</span>
                </S.Total>
                <S.Botao onClick={mostrarCheckout}>
                  Continuar com a entrega
                </S.Botao>
              </>
            ) : (
              <S.Mensagem>
                Seu carrinho esta vazio. Volte ao restaurante e escolha um
                produto!
              </S.Mensagem>
            )}
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Card
