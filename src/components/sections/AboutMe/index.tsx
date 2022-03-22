import {
  SectionAbout,
  ContainerAbout,
  ContentImage,
  ContentText,
} from './styles'

export function AboutMe() {
  return (
    <SectionAbout>
      <ContainerAbout>
        <ContentImage>
          <img
            src="/aboutme.svg"
            alt="Uma pessoa em pé olhando sua página de perfil ao lado"
          />
        </ContentImage>
        <ContentText>
          <h2>
            Sobre <span>mim</span>
          </h2>
          <div>
            <p>
              Me chamo Guilherme Alvarez Barboza, moro em São Paulo e estou me
              especializando em <strong>Desenvolvimento Web</strong>.
            </p>

            <p>
              Fiz um curso de Desenvolvimento Full Stack na{' '}
              <strong>Recode Pro</strong> 2020 - 2021, e alguns outros pela
              udemy, atualmente faço o treinamento Ignite da{' '}
              <strong>Rocketseat</strong>.
            </p>

            <p>
              “Na vida não importa o que você esteja fazendo, faça sempre o seu
              melhor.” - Ayrton Senna
            </p>
          </div>
        </ContentText>
      </ContainerAbout>
    </SectionAbout>
  )
}
