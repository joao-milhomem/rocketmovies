import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  border: ${({theme,isNew}) => isNew ? `1px dashed ${theme.COLORS.TEXT_3}` : 'none'};
  background: ${({theme,isNew}) => isNew ? 'none' : theme.COLORS.BACKGROUND_1};
  max-width:184px;

  input{
    width:100%;
    height:58px;
    padding-left:16px;
    border-radius: 10px;
    background: none;
  }

  button{
    background: none;
    padding-inline:16px;
    color:${({theme})=> theme.COLORS.ACCENT}
  }
`