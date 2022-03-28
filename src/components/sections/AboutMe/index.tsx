import { RichText } from 'prismic-dom'
import {
  SectionAbout,
  ContainerAbout,
  ContentImage,
  ContentText,
} from './styles'

interface AboutMeProps {
  about: {
    id: number
    content: {
      text: string
    }[]
  }
}

export function AboutMe({ about }: AboutMeProps) {
  return (
    <SectionAbout>
      <ContainerAbout>
        <ContentImage>
          <img
            data-aos="fade-right"
            src="/aboutme.svg"
            alt="Uma pessoa em pé olhando sua página de perfil ao lado"
          />
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
  )
}
