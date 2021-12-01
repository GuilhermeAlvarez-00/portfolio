import {
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import Link from 'next/link'
import { AiOutlineUpCircle } from 'react-icons/ai'

import { ContainerFooter, Container } from "./styles";

export function Footer() {
  return (
    <ContainerFooter>
      <Container>
        <button>
          Voltar ao topo
          <AiOutlineUpCircle />
        </button>

        <p>Guilherme Alvarez Barboza</p>

        <section>
          <Link href="https://github.com/GuilhermeAlvarez-00">
            <a><AiOutlineGithub /></a>
          </Link>

          <Link href="https://www.linkedin.com/in/guilherme-alvarez-barboza-44388318b/">
            <a><AiFillLinkedin /></a>
          </Link>
        </section>
      </Container>
    </ContainerFooter>   
  )
}