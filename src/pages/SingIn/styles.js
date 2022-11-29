import styled from "styled-components";
import coverImg from '../../assets/cover_singIn.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`

export const Form = styled.div`
  widows: 100%;
  height: 100vh;

  display: flex;
  flex:2;
  flex-direction: column;
  justify-content: center;

  padding-inline: 134px;
  height: 100%;

  >h1{
    font-size: 48px;
    margin-bottom:8px;
    color: ${({theme})=>theme.COLORS.ACCENT};
  }

  >p{
    margin-bottom:48px;
    color: ${({theme})=> theme.COLORS.TEXT_2};
  }

  >h2{
    margin-bottom:48px;
    font-size: 24px;
  }

  >button{
    margin-top: 24px;
  }

  a{
    color: ${({theme})=> theme.COLORS.ACCENT};
    align-self: center;
    margin-top: 48px;
  }
`

export const Cover = styled.div`
  width: 100%;
  height: 100vh;
  flex: 1;

  background: url(${coverImg}) no-repeat center;
  background-size: cover;
`