import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

import { TagContainer } from '../Tag/styles'

type CardProps = {
  PratosF?: boolean
}

export const Card = styled.div<CardProps>`
  border: 2px solid ${colors.red};
  max-width: 472px;
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  background-color: ${colors.white};
  position: relative;

  ${(props) =>
    props.PratosF &&
    `
      background-color: ${colors.red};
      color: ${colors.white};
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
  color: ${colors.white};
  background-color: ${colors.red};
  text-decoration: none;
  padding: 12px 16px;
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

export const TagDestaque = styled.span`
  position: absolute;
  top: 16px;
  right: 90px;
  padding: 8px;
  background-color: ${colors.red};
  color: white;
  font-size: 12px;
  border-radius: 10%;
`

export const TagNacionalidade = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px 10px;
  background-color: ${colors.red};
  color: white;
  font-size: 12px;
  border-radius: 10%;
`
