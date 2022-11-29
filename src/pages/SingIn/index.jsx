import { Container, Cover, Form } from "./styles";
import {FiMail, FiLock} from 'react-icons/fi'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'


export function SingIn() {
  return (
    <Container>
      <main>
        <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input icon={FiMail} placeholder='Email'/>
        <Input icon={FiLock} placeholder='Senha' type='password'/>

        <Button title='Entrar'/>

        <a href="">Criar conta</a>

        </Form>
      </main>

      <Cover/>
  
    </Container>
  )
}