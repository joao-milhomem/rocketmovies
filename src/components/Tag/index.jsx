import { Container } from "./styles";

export function Tag({data}) {
  return(
    <Container>
      {data && data.map(data => <span data = {data.id}> {data.genre} </span>)}
    </Container>
  )
}