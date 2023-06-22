import {
  SectionContact,
  ContainerContact,
  ContentText,
  ContentImage,
  ImageWrapper,
} from "./styles";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";

export function Contact() {
  return (
    <SectionContact>
      <ContainerContact>
        <ContentText data-aos="fade-right">
          <h2>
            Precisando dos meus <br /> serviços?
          </h2>

          <p>
            Entre em contato para <br /> podermos conversar :)
          </p>

          <div>
            <AiOutlineMail />
            <p>gui06barboza@gmail.com</p>
          </div>
        </ContentText>

        <ContentImage>
          <ImageWrapper data-aos="fade-left">
            <Image
              src="/contact.svg"
              alt="Imagem de uma pessoa codificando em um notebook"
              layout="fill"
              objectFit="contain"
            />
          </ImageWrapper>
        </ContentImage>
      </ContainerContact>
    </SectionContact>
  );
}

