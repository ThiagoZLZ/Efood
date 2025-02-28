import { useSelector } from 'react-redux'
import { RootReducer } from '../../Store'
import { parseToBrl, precoTotal } from '../Utils/index'

import { useState } from 'react'
import CardList from '../CardList'
import * as S from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../Services/api'

interface CheckoutProps {
  voltarParaOCarrinho: () => void
}

const Checkout = ({ voltarParaOCarrinho }: CheckoutProps) => {
  const [mostrarPagamento, setMostrarPagamento] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardDisplayName: '',
      cardNumber: '',
      carCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'Nome invalido')
        .required('Campo obrigatório'),
      endereco: Yup.string()
        .min(10, 'Endereço invalido')
        .required('Campo obrigatório'),
      cidade: Yup.string()
        .min(10, 'Cidade invalida')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .min(8, 'CEP não é valido')
        .required('Campo obrigatório'),
      numero: Yup.string()
        .min(1, 'Número invalido')
        .required('Campo obrigatório'),
      cardDisplayName: Yup.string()
        .min(5, 'Nome invalido')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(10, 'Número invalido')
        .required('Campo obrigatório'),
      carCode: Yup.string()
        .min(3, 'Número invalido')
        .required('Campo obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'Número invalido')
        .required('Campo obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'Número invalido')
        .required('Campo obrigatório')
    }),

    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: 12,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: 123,
            expires: {
              month: 12,
              year: 1234
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const camposEntregaPreenchidos =
    form.values.fullName &&
    form.values.endereco &&
    form.values.cidade &&
    form.values.cep &&
    form.values.numero &&
    !form.errors.fullName &&
    !form.errors.endereco &&
    !form.errors.cidade &&
    !form.errors.cep &&
    !form.errors.numero

  return (
    <div className="Janela">
      {isSuccess ? (
        <S.Confirm title="Pedido realizado">
          <>
            <h2>Pedido realizado - {data.orderId} </h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </>
          <S.BotaoConcluir>Concluir</S.BotaoConcluir>
        </S.Confirm>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {!mostrarPagamento && (
            <CardList title="Entrega">
              <div>
                <S.InputContent>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <S.Small>
                    {getErrorMessage('fullName', form.errors.fullName)}
                  </S.Small>
                </S.InputContent>
                <S.InputContent>
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={form.values.endereco}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <S.Small>
                    {getErrorMessage('endereco', form.errors.endereco)}
                  </S.Small>
                </S.InputContent>
                <S.InputContent>
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    value={form.values.cidade}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <S.Small>
                    {getErrorMessage('cidade', form.errors.cidade)}
                  </S.Small>
                </S.InputContent>
                <S.CepNumero>
                  <S.InputContent>
                    <label htmlFor="cep">CEP</label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <S.Small>{getErrorMessage('cep', form.errors.cep)}</S.Small>
                  </S.InputContent>
                  <S.InputContent>
                    <label htmlFor="numero">Número</label>
                    <input
                      type="number"
                      id="numero"
                      name="numero"
                      value={form.values.numero}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <S.Small>
                      {getErrorMessage('numero', form.errors.numero)}
                    </S.Small>
                  </S.InputContent>
                </S.CepNumero>
                <S.InputContent>
                  <label htmlFor="complemento">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    value={form.values.complemento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputContent>
              </div>
            </CardList>
          )}
          {!mostrarPagamento ? (
            <S.Botao
              type="button"
              title="Continuar com o pagamento"
              onClick={() => setMostrarPagamento(true)}
              disabled={!camposEntregaPreenchidos}
            >
              Continuar com o pagamento
            </S.Botao>
          ) : (
            <S.Pagamento>
              <CardList
                title={`Valor a pagar ${parseToBrl(precoTotal(items))}`}
              >
                <div>
                  <S.InputPagamento>
                    <label htmlFor="cardDisplayName">Nome no Cartão</label>
                    <input
                      type="text"
                      id="cardDisplayName"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <S.Small>
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </S.Small>
                  </S.InputPagamento>
                  <S.Cartão>
                    <S.InputPagamento>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <S.Small>
                        {getErrorMessage('cardNumber', form.errors.cardNumber)}
                      </S.Small>
                    </S.InputPagamento>
                    <S.InputPagamento maxWidth="50px">
                      <label htmlFor="carCode">CVV</label>
                      <input
                        type="text"
                        id="carCode"
                        name="carCode"
                        value={form.values.carCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <S.Small>
                        {getErrorMessage('carCode', form.errors.carCode)}
                      </S.Small>
                    </S.InputPagamento>
                  </S.Cartão>
                  <S.CepNumero>
                    <S.InputPagamento>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <input
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <S.Small>
                        {getErrorMessage(
                          'expiresMonth',
                          form.errors.expiresMonth
                        )}
                      </S.Small>
                    </S.InputPagamento>
                    <S.InputPagamento>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input
                        type="number"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <S.Small>
                        {getErrorMessage(
                          'expiresYear',
                          form.errors.expiresYear
                        )}
                      </S.Small>
                    </S.InputPagamento>
                  </S.CepNumero>
                </div>
              </CardList>
              <S.Botao type="submit" title="Finalizar pagamento">
                Finalizar pagamento
              </S.Botao>
              <S.Botao
                type="button"
                title=" Voltar para a edição de endereço"
                onClick={() => setMostrarPagamento(false)}
              >
                Voltar para a edição de endereço
              </S.Botao>
            </S.Pagamento>
          )}

          {!mostrarPagamento && (
            <S.Botao
              type="button"
              title="Voltar para o carrinho"
              onClick={voltarParaOCarrinho}
            >
              Voltar para o carrinho
            </S.Botao>
          )}
        </form>
      )}
    </div>
  )
}

export default Checkout
