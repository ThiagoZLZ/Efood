export const precoTotal = (items: any[]): number => {
  return items.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.preco
  }, 0)
}

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
