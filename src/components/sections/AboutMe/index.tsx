import { RichText } from "prismic-dom";
import Image from "next/image";
import {
  SectionAbout,
  ContainerAbout,
  ContentImage,
  ContentText,
  ImageWrapper,
} from "./styles";

interface AboutMeProps {
  about: {
    id: number;
    content: {
      text: string;
    }[];
  };
}

export function AboutMe({ about }: AboutMeProps) {
  return (
    <SectionAbout>
      <ContainerAbout>
        <ContentImage>
          <ImageWrapper data-aos="fade-right">
            <Image
              src="/aboutme.svg"
              alt="Uma pessoa em pé olhando sua página de perfil ao lado"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </ImageWrapper>
        </ContentImage>

        <ContentText data-aos="fade-left">
          <h2>
            Sobre <span>mim</span>
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: RichText.asHtml(about.content) }}
          />
        </ContentText>
      </ContainerAbout>
    </SectionAbout>
  );
}

