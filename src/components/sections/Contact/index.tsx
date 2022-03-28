import {
  SectionContact,
  ContainerContact,
  ContentText,
  ContentImage,
} from './styles'
import { AiOutlineMail } from 'react-icons/ai'

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
          <img
            data-aos="fade-left"
            src="/contact.svg"
            alt="Imagem de uma pessoa codificando em um notebook"
          />
        </ContentImage>
      </ContainerContact>
    </SectionContact>
  )
}
