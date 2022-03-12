import Link from 'next/link'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

import { Button } from '../../Button'

import {
  HomeHeroContainer,
  Container,
  TextContent,
  ImageContent,
  SocialMedias,
  MediaCircle,
} from './styles'

export function HomeHero() {
  return (
    <HomeHeroContainer>
      <Container>
        <TextContent data-aos="fade-right">
          <h1>
            <span>Dev</span> <br />
            Guilherme 👋
          </h1>
          <p>
            Olá! Sou desenvolvedor <span>frontend</span>,
            <br /> crio sites e sistemas para web.
          </p>
          <Button path="projetos">Projetos</Button>

          <SocialMedias>
            <p>Minhas redes</p>
            <div>
              <MediaCircle>
                <a
                  href="https://www.linkedin.com/in/guilherme-alvarez-barboza/"
                  target="_blank"
                >
                  <AiOutlineLinkedin />
                </a>
              </MediaCircle>

              <MediaCircle>
                <a
                  href="https://github.com/GuilhermeAlvarez-00"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </a>
              </MediaCircle>
            </div>
          </SocialMedias>
        </TextContent>

        <ImageContent data-aos="fade-left">
          <img src="/developer.svg" alt="imagem" />
          <span>
            &#34;Nunca pare <br /> de aprender&#34;
          </span>
        </ImageContent>
      </Container>
    </HomeHeroContainer>
  )
}
