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

export const ButtonLink = styled(Link)`
  color: ${cores.branco};
  background-color: ${cores.vermelho};
  text-decoration: none;
  padding: 8px 16px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  border: none;
  font-size: 14px;
  cursor: pointer;

  display: block;
  width: 120px;
  height: 40px;
  margin-left: 8px;
  text-align: center;
  border-radius: 5px;
`
