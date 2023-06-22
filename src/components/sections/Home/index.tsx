import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "../../Button";

import {
  SectionHome,
  ContainerHome,
  ContentText,
  SocialNetworks,
  ContentImage,
  ImageWrapper,
} from "./styles";

export function HomeHero() {
  return (
    <SectionHome>
      <ContainerHome>
        <ContentText data-aos="fade-right">
          <h1>
            <span>Dev</span> <br /> Guilherme 👋
          </h1>

          <p>
            Olá! Sou desenvolvedor frontend, <br /> crio sites e sistemas para
            web.
          </p>

          <Button path="/projetos" text="Projetos" />

          <SocialNetworks>
            <p>Minhas redes</p>
            <div>
              <Link href="https://www.linkedin.com/in/guilherme-alvarez-barboza/">
                <a
                  target="_blank"
                  aria-label="Linkedin"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </Link>

              <Link href="https://github.com/GuilhermeAlvarez-00">
                <a
                  target="_blank"
                  aria-label="Github"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </Link>
            </div>
          </SocialNetworks>
        </ContentText>

        <ContentImage>
          <ImageWrapper>
            <Image
              data-aos="fade-left"
              src="/developer.svg"
              alt="Imagem de uma pessoa codificando em um notebook"
              layout="fill"
              objectFit="contain"
            />
          </ImageWrapper>
        </ContentImage>
      </ContainerHome>
    </SectionHome>
  );
}

