import { Container } from "./styles";

export function Tag({props}) {
  return(
    <Container>
      {props && props.map(props => <span key= {props.key}> {props.genre} </span>)}
    </Container>
  )
}