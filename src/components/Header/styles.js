import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  display: flex;
  padding: 24px 123px;
  align-items: center;
  gap: 64px;
  
  width: 100%;
  height: 116px;
  
  border-bottom: 1px solid ${({theme})=> theme.COLORS.BORDER};

  h1{
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.ACCENT};
  }
`
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .text-wrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 125px;

    p{
      font-weight: bold;
    }

    a{
      font-size: 14px;
      color: ${({theme})=> theme.COLORS.TEXT_3};
    }
    
  }

  img{
    width: 64px;
    border-radius: 50%;
  }
`