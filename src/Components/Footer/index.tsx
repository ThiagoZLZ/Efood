import logo from '../../assets/icons/logo.png'
import instagram from '../../assets/icons/instagram.png'
import meta from '../../assets/icons/facebook.png'
import x from '../../assets/icons/twitter.png'
import * as S from './styles'
const Footer = () => (
  <S.FooterStyle>
    <S.Logo src={logo} alt="efood" />
    <S.List>
      <S.ListItem>
        <img src={instagram} alt="" />
      </S.ListItem>
      <S.ListItem>
        <img src={meta} alt="" />
      </S.ListItem>
      <S.ListItem>
        <img src={x} alt="" />
      </S.ListItem>
    </S.List>
    <S.Copyrights>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Copyrights>
  </S.FooterStyle>
)

export default Footer
