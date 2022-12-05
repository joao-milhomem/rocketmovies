import { Container,Content, Form , Bookmarks} from "./styles";
import {Header} from '../../components/Header'
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import {Button} from '../../components/Button'
import { Bookmark } from "../../components/Bookmark";
import { Back } from "../../components/Back";
export function New (){
  return(
    <Container>
      <Header/>

      <Back/>

      <Content>
        <Form>
          <h2>Novo filme</h2>

          <div className="group-flex">
            <Input placeholder='Título'/>
            <Input placeholder = 'Nota (de 0 a 5)'/>
          </div>

          <TextArea placeholder = 'Observações'/>
          
          <p>Marcadores</p>
          <Bookmarks>
            <Bookmark placeholder = 'Novo marcador' value = 'NodeJS' />
            <Bookmark placeholder = 'Novo marcador' isNew/>            
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