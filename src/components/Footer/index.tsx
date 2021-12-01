import {
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { AiOutlineUpCircle } from 'react-icons/ai'

import { ContainerFooter, Container } from "./styles";

export function Footer() {
  function handleBackToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  function redirectToLink(url: string) {
    window.open(url)
  }

  return (
    <ContainerFooter>
      <Container>
        <button onClick={handleBackToTop}>
          Voltar ao topo
          <AiOutlineUpCircle />
        </button>

        <p>Guilherme Alvarez Barboza</p>

        <section>
          <AiOutlineGithub 
            onClick={() => redirectToLink('https://github.com/GuilhermeAlvarez-00')} 
          />

          <AiFillLinkedin 
            onClick={() => redirectToLink('https://www.linkedin.com/in/guilherme-alvarez-barboza-44388318b/')} 
          />
        </section>
      </Container>
    </ContainerFooter>   
  )
}