import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
  
  width: 100%;
  height: 100%;

  a{
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.COLORS.ACCENT};
  }

`
export const Content = styled.div`
  grid-area: content;
  overflow-y:auto;
  margin-top: 40px;

  main{
    padding-inline: 123px;
  }
`
export const Form = styled.form`
  margin-top: 24px;
  
  .header{
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }


`