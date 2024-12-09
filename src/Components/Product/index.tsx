import close from '../../assets/icons/close.png'

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

const Product = ({ nome, descricao, foto, porcao, preco }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const compactaDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 150) + '...'
    }
    return descricao
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      {/* <Carde to={`/pratos/${id}`}> */}
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
              <button>{`Adicionar ao Carrinho - ${formataPreco(
                preco
              )}`}</button>
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
