import { Container, Cover, Form } from "./styles";
import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'


export function SingUp() {
  return (
    <Container>
      
      <main>
        <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>
        <Input icon={FiUser} placeholder = 'Nome'/>
        <Input icon={FiMail} placeholder='Email'/>
        <Input icon={FiLock} placeholder='Senha' type='password'/>

        <Button title='Cadastrar'/>

        <a href="">
          <FiArrowLeft  size={20}/>
          <span>Voltar para o login</span>
        </a>

        </Form>
      </main>    
  
      <Cover/>
    </Container>
  )
}