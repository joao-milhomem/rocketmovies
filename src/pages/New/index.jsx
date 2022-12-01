import { Container, Content, Form } from "./styles";
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {FiArrowLeft} from 'react-icons/fi'
export function New() {
  return(
    <Container>
      <Header/>

      <Content>
       <main>
        <a href="">
            <FiArrowLeft/>
            Voltar
        </a>

        <Form>
          <h2>Novo filme</h2>

          <div className="header">
            <Input placeholder = 'Título'/>
            <Input placeholder = 'Sua nota (de 0 a 5)'/>
          </div>

          <TextArea placeholder = 'Observações'/>

          <fieldset>
            <legend>Marcadores</legend>
          </fieldset>
        </Form>


       </main>
      </Content>
    </Container>
  )
}