import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  
  span{
    padding: 5px 16px;
    margin:8px 8px 8px 0 ;

    border-radius:8px;
    background-color: ${({theme}) => theme.COLORS.TAG};

    font-size: 12px;
  }
`