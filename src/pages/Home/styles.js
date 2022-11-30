import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows:116px auto ;
  grid-template-areas: 
  "header"
  "content";

`
export const Content = styled.div`
  >main{
    padding: 50px 123px;

    
  .card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom:40px;

    >h2{
      
    }

    button {
      max-width: 207px;
    }
  }

  }
`
export const Cards = styled.div``