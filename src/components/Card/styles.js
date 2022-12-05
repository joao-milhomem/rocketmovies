import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: block;
  width: 100%;
  margin-bottom: 24px;
  padding: 32px;

  border-radius: 16px;
  background-color: ${({theme}) => theme.COLORS.SUPPORT};

  >h3{
    margin-bottom: 8px;
    font-size: 24px;
  }

  >svg{
    margin-bottom: 15px;
  }

  >p{
    color: ${({theme}) => theme.COLORS.TEXT_4};
    line-height:19px;
    margin-bottom: 15px;
  }
` 

