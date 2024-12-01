import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 450px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 30px;
`
export const Comida = styled.h2`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  max-width: 676px;
  margin-bottom: 220px;
  font-family: Roboto, sans-serif;
`
export const Texto = styled.h2`
  color: ${cores.branco};
  font-size: 42px;
  max-width: 676px;
  font-family: Roboto, sans-serif;
`
