import { useDispatch } from 'react-redux'
import close from '../../assets/icons/close.png'
import { CardapioItem } from '../../Pages/Home'

import { add, open } from '../../Store/reducers/cart'

import {
  Carde,
  CardeInfos,
  CardeHeader,
  CardeImage,
  ButtonLink,
  Modal,
  ModalConteudo
} from './stylles'
import { useState } from 'react'

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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
      <Carde>
        <CardeImage>
          <img src={foto} alt="Foto do prato" />
        </CardeImage>
        <CardeInfos>
          <CardeHeader>
            <h3>{nome}</h3>
          </CardeHeader>
          <p>{compactaDescricao(descricao)}</p>
          <ButtonLink onClick={() => setModalEstaAberto(true)}>
            Adicionar ao Carrinho
          </ButtonLink>
        </CardeInfos>
      </Carde>
      <Modal className={modalEstaAberto ? 'Visible' : ''}>
        <ModalConteudo>
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
                {`Adicionar ao Carrinho - ${formataPreco(preco)}`}
              </button>
            </div>
          </div>
        </ModalConteudo>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  )
}

export default Product
