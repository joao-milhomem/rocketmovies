import { Container } from "./styles";
import {FiPlus, FiX} from 'react-icons/fi'
export function Bookmark({isNew, ...rest}) {
  return(
    <Container isNew = {isNew}>
      <input type="text" {...rest} readOnly={!isNew}/>

      <button>
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}