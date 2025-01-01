import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/icons/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  max-width: 360px;
  width: 100%;
  max-height: 1624px;
  height: 100%;
  padding: 8px;
  z-index: 1;

  img {
    width: 80px;
    height: 80px;
  }

  li {
    background-color: ${cores.rosa};
    padding: 8px;
    margin-bottom: 16px;
  }

  p {
    padding-top: 30px;
  }

  h2 {
    color: ${cores.vermelho};
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 16.41px;
    margin: 8px 0 16px 0;
  }
`

export const Price = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.vermelho};
`

export const Total = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  color: ${cores.branco};
  margin: 40px 0 16px 0;
  display: flex;
  justify-content: space-between;

  span {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: right;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.rosa};
  margin: 16px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px;
  }

  h3 {
    color: ${cores.vermelho};
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    margin-top: 8px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Botao = styled.button`
  width: 344px;
  height: 24px;
  background-color: ${cores.rosa};
  border: none;
  font-family: Roboto;
  color: ${cores.vermelho};
  font-weight: 900;
  padding: 20px 0 20px 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; /* Alinha o texto dentro do elemento */
`
