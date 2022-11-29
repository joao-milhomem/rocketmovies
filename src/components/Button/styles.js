import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.ACCENT};
  color: ${({theme}) => theme.COLORS.SUPPORT};
`