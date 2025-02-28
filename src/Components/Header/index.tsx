import React from 'react'
import * as S from './styles'
import logo from '../../assets/icons/logo.png'

const Home = () => (
  <>
    <S.HomeContainer>
      <S.Logo src={logo} alt="Logo do efood" />
      <S.Texto>Viva experiências gastronômicas no conforto da sua casa</S.Texto>
    </S.HomeContainer>
  </>
)
export default Home
