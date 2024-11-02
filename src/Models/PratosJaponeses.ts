class PratosJaponeses {
  titulo: string
  descricao: string
  capa: string
  id: number
  infos: string[]
  link?: string

  constructor (
    titulo: string,
    descricao: string,
    capa: string,
    id: number,
    infos: string[],
    link: string,

  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.capa = capa
    this.id = id
    this.infos = infos
    this.link = link
  }
}

export default PratosJaponeses
