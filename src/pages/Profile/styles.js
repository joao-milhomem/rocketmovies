import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  >header{
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;
    padding-inline: 144px;
    background-color: ${({theme})=> theme.COLORS.SUPPORT};

    a{
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({theme}) => theme.COLORS.ACCENT};
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: -93px auto 0;

  div:nth-last-child(3){
    margin-top: 24px;
  }

  button{
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin-bottom: 64px;
  text-align: center;

  img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label{
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    bottom: 7px;
    right: 80px;
    
    padding: 14px;

    background-color: ${({theme}) => theme.COLORS.ACCENT};
    border-radius: 50%;
    cursor: pointer;

    svg{
      color: ${({theme}) => theme.COLORS.TAG}
    }
    
  }

  input{
    display: none;
  }


`