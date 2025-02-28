import styled from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const InputContent = styled.div`
  font-size: 14px;

  label {
    display: block;
    margin: 8px;
    color: ${colors.white};
  }

  input {
    width: 100%;
    font-size: 14px;
    padding: 8px;
    background-color: ${colors.pink};
    border: none;
  }
`

export const CepNumero = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
`

export const Botao = styled.button`
  width: 344px;
  height: 24px;
  background-color: ${colors.pink};
  border: none;
  font-family: Roboto;
  color: ${colors.red};
  font-weight: 900;
  padding: 15px 0 15px 0;
  cursor: pointer;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; /* Alinha o texto dentro do elemento */
`

export const BotaoConcluir = styled.button`
  width: 344px;
  height: 24px;
  background-color: ${colors.pink};
  border: none;
  font-family: Roboto;
  color: ${colors.red};
  font-weight: 900;
  padding: 15px 0 15px 0;
  cursor: pointer;
  margin-top: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; /* Alinha o texto dentro do elemento */
`

export const InputPagamento = styled.div<InputGroupProps>`
  font-size: 14px;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    margin: 8px;
    color: ${colors.white};
    font-size: 14px;
    width: 100%;
  }

  input {
    width: 100%;
    font-size: 14px;
    padding: 8px;
    background-color: ${colors.pink};
    border: none;
  }
`

export const Cartão = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
`

export const Pagamento = styled.div`
  display: block;
`

export const Small = styled.small`
  color: ${colors.white};
`

export const Confirm = styled.div`
  color: ${colors.white};

  h2 {
    color: ${colors.white};
    margin-bottom: 2px;
    margin-top: 30px;
  }

  p {
    margin-top: -5px;
  }
`
