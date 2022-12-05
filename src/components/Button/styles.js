import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  height: 56px;
  padding: 16px 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
  
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.ACCENT};
  color: ${({theme}) => theme.COLORS.TAG};
`