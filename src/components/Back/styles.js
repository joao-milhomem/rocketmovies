import styled from "styled-components";

export const  Container = styled.div`
  grid-area: back;

  display: flex;
  padding: 40px 113px 24px;

  a{
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({theme}) => theme.COLORS.ACCENT};  
  }
`