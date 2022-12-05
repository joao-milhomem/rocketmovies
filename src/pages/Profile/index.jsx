import { Container, Form, Avatar } from "./styles";
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {Back} from '../../components/Back'
import { FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

export function Profile() {

  return (
    <Container>
      
      <header>
        <Back to= '/'/>
      </header>

      <Form>
        
        <Avatar>
          <img src="https://github.com/joaomilhomem.png" alt="" />
          <label htmlFor="file">
            <FiCamera size={20}/>
          </label>
          <input type="file" name="" id="file" />
        </Avatar>

        <Input placeholder = 'Nome' icon={FiUser}/>
        <Input placeholder = 'E-mail' icon={FiMail}/>
        <Input placeholder = 'Senha atual' icon={FiLock}/>
        <Input placeholder = 'Nova senha' icon={FiLock}/>
        <Button title='Salvar'/>
      </Form>
    </Container>
  )
}