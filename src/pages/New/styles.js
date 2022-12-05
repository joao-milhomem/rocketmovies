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
  grid-area: content;
  overflow-y: auto;
  width: 100%;
`
export const Form = styled.form`
  padding-inline: 110px;

  h2{
    margin-bottom:40px;
  }
    
  .group-flex {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    margin-bottom: 40px;

    button:nth-last-child(2){
      background-color:${({theme}) => theme.COLORS.BACKGROUND_3} ;
      color: ${({theme}) => theme.COLORS.ACCENT};
    }
  }

  textarea{
    margin-bottom: 40px;
  }

  p{
    margin-bottom:24px ;
  }
`
export const Bookmarks = styled.div`
  width: 100%;
  padding: 16px;

  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_3};

  display: flex;
  gap: 24px;

  margin-bottom: 40px;
`