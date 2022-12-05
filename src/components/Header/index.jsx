import { Container,Avatar } from "./styles";
import {Input} from '../Input'
import {FiSearch} from 'react-icons/fi'
import { Link } from "react-router-dom";
export function Header() {
  return(
    <Container>
      <Link to='/'>
        <h1>RocketMovies</h1>
      </Link>

      <Input placeholder = 'Pesquisar pelo título' icon={FiSearch}/>

      <Avatar>
        <div className="text-wrapper">
          <Link to='/profile'>
          <p>Joao Milhomem</p>
          </Link>

          <a href="">Sair</a>
        </div>

        <Link to='/profile'>
          <img src="https://github.com/joaomilhomem.png" alt="" />
        </Link>
      </Avatar>
    </Container>
  )
}