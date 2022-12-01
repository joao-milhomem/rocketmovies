import { Container, Add , Content} from "./styles";

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

      <Add>
          <h2>Meus filmes</h2>
          <Button title='Adicionar filme' icon={FiPlus}/>
      </Add>

      <Content>
        
        <main>
          <Card>
            <h3>Interestellar</h3>
            <Rate/>
            <p>As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para lkeyerar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.
            </p>

            <Tag  props={[
              {
                key: '1',
                genre:'Ficção cientifica'
              }, 

              {
                key: '2',
                genre:'Família'
              },
              {
                key: '3',
                genre:'Drama'
              }
            ]}/>
                
          </Card>
              
          <Card>
            <h3>Interestellar</h3>
            <Rate/>
            <p>As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para lkeyerar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.
            </p>

            <Tag props= {[
              {
                key: '1',
                genre:'Ficção cientifica'
              }, 

              {
                key: '2',
                genre:'Família'
              },
              {
                key: '3',
                genre:'Drama'
              }
            ]}/>
              
          </Card>

          <Card>
            <h3>Interestellar</h3>
            <Rate/>
            <p>As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para lkeyerar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.
            </p>

            <Tag props= {[
              {
                key: '1',
                genre:'Ficção cientifica'
              }, 

              {
                key: '2',
                genre:'Família'
              },
              {
                key: '3',
                genre:'Drama'
              }
            ]}/>
            
          </Card>
        </main>
      
      </Content>
    </Container>
  )
}