import styled from 'styled-components'
import banner from '../../assets/images/BannerImgHome.png'

export const HomeContainer = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${banner});
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 50px;
`
export const Texto = styled.h4`
  font-weight: bold;
  font-size: 36px;
  max-width: 539px;
  text-align: center;
  margin-bottom: 40px;
`
