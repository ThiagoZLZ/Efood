import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

import { TagContainer } from '../Tag/styles'

type CardProps = {
  PratosF?: boolean
}

export const Card = styled.div<CardProps>`
  border: 1px solid ${cores.rosa};
  max-width: 472px;
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  background-color: ${cores.branco};
  position: relative;

  ${(props) =>
    props.PratosF &&
    `
      background-color: ${cores.vermelho};
      color: ${cores.branco};
      padding: 8px;
    `}

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardImage = styled.div<CardProps>`
  width: 100%;
  height: 210px;
  overflow-y: hidden;

  img {
    width: 100%;
  }

  ${(props) =>
    props.PratosF &&
    `
      width: 100%;
      height: 150px;
    `}
`

export const CardHeader = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    h3 {
      margin-right: 8px;
    }
  }
`

export const CardInfos = styled.div`
  padding: 8px;
  border: 1px solid ${cores.vermelho};

  p {
    margin: 16px 0;
    text-decoration: none;
    font-size: 18px;
    font-family: Roboto, sans-serif;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const ButtonLink = styled.button`
  color: ${cores.branco};
  background-color: ${cores.rosa};
  text-decoration: none;
  padding: 8px 70px;
  color: ${cores.vermelho};
  font-weight: bold;
  font-family: Roboto, sans-serif;
  border: none;
  font-size: 14px;
  cursor: pointer;

  display: block;
  margin: 0 auto;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
  display: none;

  &.Visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const ModalConteudo = styled.div`
  position: relative;
  max-width: 1024px;
  z-index: 1;
  top: 0;
  left: 0;

  > div {
    display: flex;
    padding: 0 0 32px 32px;
    background-color: ${cores.vermelho};
    color: ${cores.branco};

    > img {
      width: 280px;
      height: 280px;
      margin-right: 24px;
      object-fit: cover;
      margin-top: 32px;
    }

    div {
      display: block;

      div {
        display: flex;
        justify-content: space-between;

        h2 {
          font-size: 21px;
          font-weight: 900;
          margin-top: 32px;
        }

        img {
          height: 16px;
          width: 16px;
          margin: 8px;
          cursor: pointer;
        }
      }

      p {
        margin: 16px 0;
        font-size: 14px;
      }

      button {
        border: none;
        padding: 4px 7px;
        font-size: 14px;
        font-weight: 700;
        background-color: ${cores.rosa};
        color: ${cores.vermelho};
      }
    }
  }
`
