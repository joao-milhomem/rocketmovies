import { Container,Content, Back, Form , Bookmarks} from "./styles";
import {Header} from '../../components/Header'
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import {Button} from '../../components/Button'
export function New (){
  return(
    <Container>
      <Header/>

      <Back>
        <a href="">
          <FiArrowLeft/>
          Voltar
        </a> 
      </Back>

      <Content>
        <Form>
          <h2>Novo filme</h2>

          <div className="group-flex">
            <Input placeholder='Título'/>
            <Input placeholder = 'Nota (de 0 a 5)'/>
          </div>

          <TextArea placeholder = 'Observações'/>
          
          <Bookmarks>
            <p>Marcadores</p>

            
          </Bookmarks>

          <div className="group-flex">
            <Button title='Excluir filme'/>
            <Button title='Salvar alterações'/>           
          </div>
        </Form>
      </Content>
    </Container>
  )
}