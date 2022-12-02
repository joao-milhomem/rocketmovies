import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 20px auto;
  grid-template-areas: 
    "header"
    "back"
    "content";
`
export const Back = styled.div`
  grid-area: back;
  padding-inline: 110px;

  a{
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({theme}) => theme.COLORS.ACCENT};
    }
`
export const Content = styled.main`
  grid-area: content;
  overflow-y: auto;
  width: 100%;
`
export const Form = styled.form`
    padding-inline: 110px;
  .group-flex {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    button:nth-last-child(2){
      background-color:${({theme}) => theme.COLORS.BACKGROUND_3} ;
      color: ${({theme}) => theme.COLORS.ACCENT};
    }
  }
`
export const Bookmarks = styled.div`
`