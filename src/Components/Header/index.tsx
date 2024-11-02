import React from 'react'
import { HomeContainer, Logo, Texto } from './styles'
import logo from '../../assets/icons/logo.png'

const Home = () => (
  <>
    <HomeContainer>
      <Logo src={logo} alt="Logo do efood" />
      <Texto>Viva experiências gastronômicas no conforto da sua casa</Texto>
    </HomeContainer>
  </>
)
export default Home
