import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display:flex;
  align-items:center;
  margin-bottom: 8px;

  border-radius: 10px;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_1};

  svg{
    color: ${({theme})=> theme.COLORS.TEXT_3};
    margin-left: 16px;
    }

  >input{
    width: 100%;
    height: 56px;
    padding-inline: 8px;

    font-size: 16px;

    border-radius: 10px;
    color: ${({theme}) => theme.COLORS.TEXT_1};
    background: none;



    &::placeholder{
      color: ${({theme}) => theme.COLORS.TEXT_3};
    }


  }
`