import { useDispatch } from 'react-redux'
import close from '../../assets/icons/close.png'

import { add, open } from '../../Store/reducers/cart'

import * as S from './stylles'
import { useState } from 'react'
import { parseToBrl } from '../Utils'

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

const Product = ({ nome, descricao, foto, porcao, preco }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    const item = { nome, descricao, foto, porcao, preco, id: Math.random() }
    dispatch(add(item))
    dispatch(open())
  }

  const compactaDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 150) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.Carde>
        <S.CardeImage>
          <img src={foto} alt="Foto do prato" />
        </S.CardeImage>
        <S.CardeInfos>
          <S.CardeHeader>
            <h3>{nome}</h3>
          </S.CardeHeader>
          <p>{compactaDescricao(descricao)}</p>
          <S.ButtonLink onClick={() => setModalEstaAberto(true)}>
            Adicionar ao Carrinho
          </S.ButtonLink>
        </S.CardeInfos>
      </S.Carde>
      <S.Modal className={modalEstaAberto ? 'Visible' : ''}>
        <S.ModalConteudo>
          <div className="container">
            <img src={foto} alt="Foto do prato" />
            <div>
              <div>
                <h2>{nome}</h2>
                <img
                  src={close}
                  onClick={() => setModalEstaAberto(false)}
                  alt="Clique para fechar"
                />
              </div>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
              <button onClick={addToCart}>
                {`Adicionar ao Carrinho - ${parseToBrl(preco)}`}
              </button>
            </div>
          </div>
        </S.ModalConteudo>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </S.Modal>
    </>
  )
}

export default Product
