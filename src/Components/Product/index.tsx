import { useParams } from 'react-router-dom'
import pizzaM from '../../assets/images/image3.png'
import close from '../../assets/icons/close.png'

import {
  Carde,
  CardInfos,
  CardHeader,
  CardImage,
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

const Product = ({ id, nome, descricao, foto, porcao, preco }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <Carde>
        <CardImage>
          <img src={foto} alt="Foto do prato" />
        </CardImage>
        <CardInfos>
          <CardHeader>
            <h3>{nome}</h3>
          </CardHeader>
          <p>{descricao}</p>
          <ButtonLink onClick={() => setModalEstaAberto(true)}>
            Adicionar ao Carrinho
          </ButtonLink>
        </CardInfos>
      </Carde>
      <Modal className={modalEstaAberto ? 'Visible' : ''}>
        <ModalConteudo>
          <div className="container">
            <img src={pizzaM} alt="Foto do prato" />
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
              <button>{`Adicionar ao Carrinho - ${preco}`}</button>
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
