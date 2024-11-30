import estrela from '../../assets/icons/estrela.png'

import pizzaM from '../../assets/images/image3.png'
import close from '../../assets/icons/close.png'

import Tag from '../Tag'
import {
  Card,
  CardInfos,
  CardHeader,
  CardImage,
  Infos,
  StyledLink,
  ButtonLink,
  Modal,
  ModalConteudo
} from './styles'
import { useState } from 'react'

type Props = {
  titulo: string
  avaliacao: string
  descricao: string
  cardapio: string
  capa: string
  id: number
  tipo: string[]
  destaque?: boolean
  link?: string
  tagContent?: string
  mostrarEstrela?: boolean
  PratosF?: boolean
  nome: string
  porcao: string
  foto: string
  preco: number
  destacado: boolean
}

const Restaurant = ({
  titulo,
  avaliacao,
  descricao,
  capa,
  tipo,
  destaque,
  id,
  link,
  tagContent = 'Saiba mais',
  mostrarEstrela = true,
  PratosF = false
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <Card PratosF={PratosF}>
        <StyledLink to={link || '#'}>
          <CardImage PratosF={PratosF}>
            <img src={capa} alt="Foto do restaurante" />
          </CardImage>
          <CardInfos>
            <Infos>
              {destaque && <Tag size="big">Destaque da semana</Tag>}
              {tipo.map((tipo) => (
                <Tag size="small" key={tipo}>
                  {tipo}
                </Tag>
              ))}
            </Infos>
            <CardHeader>
              <h3>{titulo}</h3>
              <div>
                <h3>{avaliacao}</h3>
                {mostrarEstrela && <img src={estrela} alt="avaliação" />}
              </div>
            </CardHeader>
            <p>{descricao}</p>
            {PratosF ? (
              <ButtonLink onClick={() => setModalEstaAberto(true)}>
                Adicionar ao Carrinho
              </ButtonLink>
            ) : (
              <Tag size="medio">{tagContent}</Tag>
            )}
          </CardInfos>
        </StyledLink>
      </Card>
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

export default Restaurant
