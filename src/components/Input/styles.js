import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  margin-bottom: 8px;
  padding-left: 16px;

  display:flex;
  align-items:center;
  
  border-radius: 10px;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_1};

  >svg{
    color: ${({theme})=> theme.COLORS.TEXT_3};
  }

  >input{
    width: 100%;
    height: 56px;
    padding-inline: 16px;

    color: ${({theme}) => theme.COLORS.TEXT_1};
    background: none;

    font-size: 16px;


    &::placeholder{
      color: ${({theme}) => theme.COLORS.TEXT_3};
    }
  }
`