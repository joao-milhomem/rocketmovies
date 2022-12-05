import { Container, Content, Details }from "./styles";
import { Header } from '../../components/Header'
import { Back} from '../../components/Back'
import { Tag} from '../../components/Tag'
export function Preview() {
  return(
    <Container>
      <Header/>

      <Back/>        

      <Content>
        <main>
          <div className="title">
            <h2>Interestellar</h2>
            <svg width="141" height="21" viewBox="0 0 141 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8748 19.2503C15.7433 19.2508 15.6149 19.2098 15.508 19.1331L10.4842 15.4909L5.46037 19.1331C5.35304 19.211 5.22373 19.2526 5.09114 19.2522C4.95855 19.2517 4.82955 19.209 4.72279 19.1304C4.61603 19.0518 4.53704 18.9413 4.49724 18.8148C4.45744 18.6883 4.45889 18.5524 4.50138 18.4269L6.46076 12.6233L1.38264 9.14092C1.27264 9.06557 1.18962 8.95702 1.14571 8.83113C1.1018 8.70524 1.0993 8.56861 1.13857 8.4412C1.17784 8.31379 1.25682 8.20227 1.36399 8.12294C1.47115 8.04362 1.60087 8.00064 1.7342 8.00029H7.99904L9.88967 2.18193C9.93039 2.05632 10.0099 1.94683 10.1167 1.86917C10.2235 1.79152 10.3521 1.74969 10.4842 1.74969C10.6163 1.74969 10.7449 1.79152 10.8517 1.86917C10.9585 1.94683 11.038 2.05632 11.0787 2.18193L12.9694 8.00224H19.2342C19.3677 8.00218 19.4977 8.04486 19.6052 8.12403C19.7127 8.2032 19.792 8.31471 19.8315 8.44222C19.871 8.56973 19.8687 8.70654 19.8248 8.83262C19.7809 8.9587 19.6978 9.06743 19.5877 9.14287L14.5076 12.6233L16.4658 18.4253C16.4976 18.5192 16.5065 18.6194 16.4919 18.7174C16.4773 18.8155 16.4395 18.9087 16.3818 18.9893C16.324 19.0699 16.248 19.1356 16.1598 19.181C16.0717 19.2263 15.974 19.2501 15.8748 19.2503Z" fill="#FF859B"/>
            <path d="M75.8748 19.2503C75.7433 19.2508 75.6149 19.2098 75.508 19.1331L70.4842 15.4909L65.4604 19.1331C65.353 19.211 65.2237 19.2526 65.0911 19.2522C64.9586 19.2517 64.8296 19.209 64.7228 19.1304C64.616 19.0518 64.537 18.9413 64.4972 18.8148C64.4574 18.6883 64.4589 18.5524 64.5014 18.4269L66.4608 12.6233L61.3826 9.14092C61.2726 9.06557 61.1896 8.95702 61.1457 8.83113C61.1018 8.70524 61.0993 8.56861 61.1386 8.4412C61.1778 8.31379 61.2568 8.20227 61.364 8.12294C61.4711 8.04362 61.6009 8.00064 61.7342 8.00029H67.999L69.8897 2.18193C69.9304 2.05632 70.0099 1.94683 70.1167 1.86917C70.2235 1.79152 70.3521 1.74969 70.4842 1.74969C70.6163 1.74969 70.7449 1.79152 70.8517 1.86917C70.9585 1.94683 71.038 2.05632 71.0787 2.18193L72.9694 8.00224H79.2342C79.3677 8.00218 79.4977 8.04486 79.6052 8.12403C79.7127 8.2032 79.792 8.31471 79.8315 8.44222C79.871 8.56973 79.8687 8.70654 79.8248 8.83262C79.7809 8.9587 79.6978 9.06743 79.5877 9.14287L74.5076 12.6233L76.4658 18.4253C76.4976 18.5192 76.5065 18.6194 76.4919 18.7174C76.4773 18.8155 76.4395 18.9087 76.3818 18.9893C76.324 19.0699 76.248 19.1356 76.1598 19.181C76.0717 19.2263 75.974 19.2501 75.8748 19.2503Z" fill="#FF859B"/>
            <path d="M105.875 19.2503C105.743 19.2508 105.615 19.2098 105.508 19.1331L100.484 15.4909L95.4604 19.1331C95.353 19.211 95.2237 19.2526 95.0911 19.2522C94.9586 19.2517 94.8296 19.209 94.7228 19.1304C94.616 19.0518 94.537 18.9413 94.4972 18.8148C94.4574 18.6883 94.4589 18.5524 94.5014 18.4269L96.4608 12.6233L91.3826 9.14092C91.2726 9.06557 91.1896 8.95702 91.1457 8.83113C91.1018 8.70524 91.0993 8.56861 91.1386 8.4412C91.1778 8.31379 91.2568 8.20227 91.364 8.12294C91.4711 8.04362 91.6009 8.00064 91.7342 8.00029H97.999L99.8897 2.18193C99.9304 2.05632 100.01 1.94683 100.117 1.86917C100.223 1.79152 100.352 1.74969 100.484 1.74969C100.616 1.74969 100.745 1.79152 100.852 1.86917C100.959 1.94683 101.038 2.05632 101.079 2.18193L102.969 8.00224H109.234C109.368 8.00218 109.498 8.04486 109.605 8.12403C109.713 8.2032 109.792 8.31471 109.831 8.44222C109.871 8.56973 109.869 8.70654 109.825 8.83262C109.781 8.9587 109.698 9.06743 109.588 9.14287L104.508 12.6233L106.466 18.4253C106.498 18.5192 106.506 18.6194 106.492 18.7174C106.477 18.8155 106.44 18.9087 106.382 18.9893C106.324 19.0699 106.248 19.1356 106.16 19.181C106.072 19.2263 105.974 19.2501 105.875 19.2503Z" fill="#FF859B"/>
            <path d="M45.8748 19.2503C45.7433 19.2508 45.6149 19.2098 45.508 19.1331L40.4842 15.4909L35.4604 19.1331C35.353 19.211 35.2237 19.2526 35.0911 19.2522C34.9586 19.2517 34.8296 19.209 34.7228 19.1304C34.616 19.0518 34.537 18.9413 34.4972 18.8148C34.4574 18.6883 34.4589 18.5524 34.5014 18.4269L36.4608 12.6233L31.3826 9.14092C31.2726 9.06557 31.1896 8.95702 31.1457 8.83113C31.1018 8.70524 31.0993 8.56861 31.1386 8.4412C31.1778 8.31379 31.2568 8.20227 31.364 8.12294C31.4711 8.04362 31.6009 8.00064 31.7342 8.00029H37.999L39.8897 2.18193C39.9304 2.05632 40.0099 1.94683 40.1167 1.86917C40.2235 1.79152 40.3521 1.74969 40.4842 1.74969C40.6163 1.74969 40.7449 1.79152 40.8517 1.86917C40.9585 1.94683 41.038 2.05632 41.0787 2.18193L42.9694 8.00224H49.2342C49.3677 8.00218 49.4977 8.04486 49.6052 8.12403C49.7127 8.2032 49.792 8.31471 49.8315 8.44222C49.871 8.56973 49.8687 8.70654 49.8248 8.83262C49.7809 8.9587 49.6978 9.06743 49.5877 9.14287L44.5076 12.6233L46.4658 18.4253C46.4976 18.5192 46.5065 18.6194 46.4919 18.7174C46.4773 18.8155 46.4395 18.9087 46.3818 18.9893C46.324 19.0699 46.248 19.1356 46.1598 19.181C46.0717 19.2263 45.974 19.2501 45.8748 19.2503Z" fill="#FF859B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M130.484 1.75C130.755 1.75 130.995 1.92433 131.079 2.18182L132.969 8H139.234C139.508 8 139.75 8.17835 139.831 8.43998C139.912 8.70161 139.814 8.98555 139.588 9.14046L134.509 12.6231L136.467 18.4251C136.554 18.6828 136.464 18.9671 136.245 19.1283C136.026 19.2895 135.728 19.2907 135.508 19.1311L130.484 15.4906L125.46 19.1311C125.24 19.2907 124.942 19.2895 124.723 19.1283C124.504 18.9671 124.414 18.6828 124.501 18.4251L126.46 12.6231L121.381 9.14046C121.155 8.98555 121.056 8.70161 121.137 8.43998C121.218 8.17835 121.46 8 121.734 8H127.999L129.89 2.18182C129.973 1.92433 130.213 1.75 130.484 1.75ZM130.484 4.39709L129.047 8.81818C128.964 9.07567 128.724 9.25 128.453 9.25H123.751L127.556 11.8595C127.787 12.0177 127.885 12.3099 127.795 12.5749L126.312 16.9705L130.117 14.2127C130.336 14.0541 130.632 14.0541 130.851 14.2127L134.657 16.9705L133.173 12.5749C133.084 12.3099 133.181 12.0177 133.412 11.8595L137.218 9.25H132.515C132.245 9.25 132.005 9.07567 131.921 8.81818L130.484 4.39709Z" fill="#FF859B"/>
            </svg>

          </div>

          <Details>
            <div className="by">
              <img src="https://github.com/joaomilhomem.png" alt="" />
              <span>Joao Milhomem</span>
            </div>

            <div className="dateTime">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48904 1.73077C4.94261 1.73077 2.06767 4.76146 2.06767 8.5C2.06767 12.2385 4.94261 15.2692 8.48904 15.2692C12.0355 15.2692 14.9104 12.2385 14.9104 8.5C14.9104 4.76146 12.0355 1.73077 8.48904 1.73077ZM0.900146 8.5C0.900146 4.08172 4.29781 0.5 8.48904 0.5C12.6803 0.5 16.0779 4.08172 16.0779 8.5C16.0779 12.9183 12.6803 16.5 8.48904 16.5C4.29781 16.5 0.900146 12.9183 0.900146 8.5Z" fill="#FF859B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48904 3.57692C8.81144 3.57692 9.0728 3.85244 9.0728 4.19231V7.88462H12.5754C12.8978 7.88462 13.1591 8.16013 13.1591 8.5C13.1591 8.83987 12.8978 9.11538 12.5754 9.11538H8.48904C8.16663 9.11538 7.90527 8.83987 7.90527 8.5V4.19231C7.90527 3.85244 8.16663 3.57692 8.48904 3.57692Z" fill="#FF859B"/>
              </svg>

              <span>
                23/05/2022 ás 08:00
              </span>
            </div>
          </Details>

          <Tag props={[
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

          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.

            Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
          </p>

          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.

            Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
          </p>
        </main>
      </Content>
     
    </Container>
  )
}