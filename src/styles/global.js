import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_2};
  }

  body,input,button,textarea,a{
    color: ${({theme}) => theme.COLORS.TEXT_1};
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  a{
    text-decoration: none;
  }

  a , button {
    cursor: pointer;
    
    &:hover{
      transition: filter 300ms;
      filter: brightness(0.8);
    }
  }

  input, button{
    border: none;
    outline: none;
  }
  
`