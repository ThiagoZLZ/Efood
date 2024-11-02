class Restaurantes {
  titulo: string
  descricao: string
  capa: string
  id: number
  infos: string[]
  avaliacao: string
  destaque?: boolean
  link?: string
  tagContent?: string

  constructor (
    titulo: string,
    descricao: string,
    capa: string,
    id: number,
    infos: string[],
    link: string,
    avaliacao: string,
    destaque?: boolean,
    tagContent?: string
  ) {
    this.titulo = titulo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.id = id
    this.infos = infos
    this.destaque = destaque
    this.link = link
    this.tagContent = tagContent
  }
}

export default Restaurantes
