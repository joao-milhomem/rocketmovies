import { Container } from "./styles";
import {FiArrowLeft} from 'react-icons/fi'
import { Link } from "react-router-dom";
export function Back() {
  return(
    <Container>

      <Link to= '/'>
        <FiArrowLeft/>
        <span>Voltar</span>
      </Link>
      
    </Container>
  )
}