import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto auto;
  grid-template-areas:
  "header"
  "back"
  "content";
  `
export const Content = styled.main`
  width: 100%;
  height: 100%;
  grid-area: content;
  overflow-y: auto;
  
  main{
    padding:0 113px 60px;
    .title{
      display: flex;
      align-items: center;
      gap: 19px;
  
      margin-bottom: 24px;
    }

    p{
      margin-top:40px;
    }
  }
`

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 40px;
  .by{
    display: flex;
    align-items: center;
    gap: 8px;

    img{
      width: 16px;
      border-radius: 50%;
    }
  }

  .dateTime{
    display: flex;
    align-items: center;
    gap: 8px;
  }
`