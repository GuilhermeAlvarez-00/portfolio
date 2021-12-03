import { ImageSlider } from '../../components/ImageSlider'

import { 
  IndividualProjectContainer, 
  Container, 
  AboutProject,
  TitleSection,
  TechnologiesProject,
  ProjectPhotos,
} from '../../styles/individualProjectStyles'

export default function IndividualProject() {
  return (
    <IndividualProjectContainer>
      <Container>
        <AboutProject>
          <TitleSection>Projeto 01</TitleSection>
          <div>
            <img src="https://images.prismic.io/guilherme-portfolio/091d85fd-1486-409a-aad5-315951adc635_projetoex3.jpeg?auto=compress,format" alt="" />

            <article>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt officiis, maiores quas rerum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt officiis, maiores quas rerum.
              </p>
              <button>
                Repositório
              </button>

              <button>
                Projeto online
              </button>
            </article>
          </div>
        </AboutProject>

        <TechnologiesProject>
          <TitleSection>Tecnologias</TitleSection>
          <p>NextJS, Typescript, NodeJS, Styled-components</p>
        </TechnologiesProject>

        <ProjectPhotos>
          <TitleSection>Fotos do projeto</TitleSection>

          <ImageSlider />
        </ProjectPhotos>
      </Container>
    </IndividualProjectContainer>
  )
}