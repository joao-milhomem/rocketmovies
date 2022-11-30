import { Container , Content, Cards} from "./styles";

import {FiPlus} from 'react-icons/fi'

import {Header} from '../../components/Header'
import {Button} from '../../components/Button'
import {Card} from '../../components/Card'
import {Rate} from '../../components/Rate'
import { Tag } from "../../components/Tag";

export function Home() {
  return(
    <Container>
      <Header/>

      <Content>
        <main>
          
          <div className="card-header">
            <h2>Meus filmes</h2>
            <Button title='Adicionar filme' icon={FiPlus}/>
          </div>

          <Cards>

            <Card>
              <h3>Interestellar</h3>
              <Rate/>
              <p>As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.
              </p>

            <Tag data= {[
              {
                id: '1',
                genre:'Ficção cientifica'
              }, 

              {
                id: '2',
                genre:'Família'
              },
              {
                id: '3',
                genre:'Drama'
              }
            ]}/>
              
            </Card>
          </Cards>
        </main>
      </Content>
    </Container>
  )
}