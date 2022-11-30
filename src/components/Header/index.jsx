import { Container,Avatar } from "./styles";
import {Input} from '../Input'
export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder = 'Pesquisar pelo título' />

      <Avatar>
        <div className="text-wrapper">
          <p>Joao Milhomem</p>
          <a href="">Sair</a>
        </div>

        <img src="https://github.com/joaomilhomem.png" alt="" />
      </Avatar>
    </Container>
  )
}