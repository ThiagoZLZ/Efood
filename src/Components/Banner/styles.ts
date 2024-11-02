import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div<{ imagem: string }>`
  width: 100%;
  height: 450px;
  display: block;
  background-image: url(${(props) => props.imagem});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 30px;
`
export const Comida = styled.h2`
  color: ${cores.dourado};
  font-size: 32px;
  font-weight: bold;
  max-width: 676px;
  margin-bottom: 220px;
`
export const Texto = styled.h2`
  color: ${cores.dourado};
  font-size: 42px;
  max-width: 676px;
`
