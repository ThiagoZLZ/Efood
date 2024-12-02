import estrela from '../../assets/icons/estrela.png'

import pizzaM from '../../assets/images/image3.png'
import close from '../../assets/icons/close.png'

import {
  Carde,
  CardInfos,
  CardHeader,
  CardImage,
  StyledLink,
  ButtonLink,
  Modal,
  ModalConteudo
} from './stylles'
import { useState } from 'react'

type Props = {
  titulo: string
  avaliacao: string
  descricao: string
  capa: string
  id: number
  tipo: string[]
  destaque?: boolean
  link?: string
  tagContent?: string
  foto: string
  nome: string
}

const Product = ({
  titulo,
  avaliacao,
  descricao,
  capa,
  foto,
  nome,
  tipo,
  destaque,
  id,
  link
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <Carde>
        <StyledLink to={link || '#'}>
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
        </StyledLink>
      </Carde>
      <Modal className={modalEstaAberto ? 'Visible' : ''}>
        <ModalConteudo>
          <div className="container">
            <img src={pizzaM} alt="Foto do prato" />
            <div>
              <div>
                <h2>{titulo}</h2>
                <img
                  src={close}
                  onClick={() => setModalEstaAberto(false)}
                  alt="Clique para fechar"
                />
              </div>
              <p>{descricao}</p>
              <p>Serve:</p>
              <button>Adicionar ao Carrinho</button>
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
