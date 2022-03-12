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
  function redirectToLink(url: string) {
    window.open(url)
  }

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
                  onClick={() =>
                    redirectToLink(
                      'https://www.linkedin.com/in/guilherme-alvarez-barboza/'
                    )
                  }
                >
                  <AiOutlineLinkedin />
                </a>
              </MediaCircle>

              <MediaCircle>
                <a
                  onClick={() =>
                    redirectToLink('https://github.com/GuilhermeAlvarez-00')
                  }
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
