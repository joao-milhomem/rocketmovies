import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows:116px auto auto ;
  grid-template-areas: 
  "header"
  "add"
  "content";
`

export const Add = styled.div` 
  grid-area: add;

  display: flex;
  justify-content:space-between ;
  align-items: center;
  padding-inline: 106px;
  margin-top: 50px;

  h2{
    font-size: 32px;
  }

  button {
    max-width: 207px;
  }
`

export const Content = styled.div`
    grid-area: content;
    overflow-y: auto;

    margin-top: 40px;
    
    main{
      padding: 0 122px;
    }
`