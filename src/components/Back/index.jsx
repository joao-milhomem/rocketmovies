import { Container } from "./styles";
import {FiArrowLeft} from 'react-icons/fi'
export function Back() {
  return(
    <Container>

      <a href="">
        <FiArrowLeft/>
        <span>Voltar</span>
      </a>
      
    </Container>
  )
}