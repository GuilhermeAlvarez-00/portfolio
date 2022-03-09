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
                <Link href="#">
                  <a>
                    <AiOutlineLinkedin />
                  </a>
                </Link>
              </MediaCircle>

              <MediaCircle>
                <Link href="#">
                  <a>
                    <AiOutlineGithub />
                  </a>
                </Link>
              </MediaCircle>
            </div>
          </SocialMedias>
        </TextContent>

        <ImageContent data-aos="fade-left">
          <img src="/developer.svg" alt="imagem" />
          <span>
            "Nunca pare <br /> de aprender"
          </span>
        </ImageContent>
      </Container>
    </HomeHeroContainer>
  )
}
