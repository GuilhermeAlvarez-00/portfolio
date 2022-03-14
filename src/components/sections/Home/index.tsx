import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Button } from '../../Button'

import {
  SectionHome,
  ContainerHome,
  ContentText,
  SocialNetworks,
  ContentImage,
} from './styles'

export function HomeHero() {
  return (
    <SectionHome>
      <ContainerHome>
        <ContentText>
          <h1>
            <span>Dev</span> <br /> Guilherme 👋
          </h1>

          <p>
            Olá! Sou desenvolvedor frontend, <br /> crio sites e sistemas para
            web.
          </p>

          <Button text="Projetos" />

          <SocialNetworks>
            <p>Minhas redes</p>
            <div>
              <Link href="https://www.linkedin.com/in/guilherme-alvarez-barboza/">
                <a target="_blank">
                  <FaLinkedin />
                </a>
              </Link>

              <Link href="https://github.com/GuilhermeAlvarez-00">
                <a target="_blank">
                  <FaGithub />
                </a>
              </Link>
            </div>
          </SocialNetworks>
        </ContentText>

        <ContentImage>
          <img
            src="/developer.svg"
            alt="Imagem de uma pessoa codificando em um notebook"
          />
        </ContentImage>
      </ContainerHome>
    </SectionHome>
  )
}
