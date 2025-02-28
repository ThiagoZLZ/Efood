import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  pink: '#FFEBD9',
  white: '#FFFFFF',
  golden: '#FFB930',
  beige: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color: ${colors.beige};
    color: ${colors.red};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
