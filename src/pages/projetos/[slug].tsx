import { Title } from '../../components/Title'
import { IndividualProjectContainer, Container, AboutProject } from '../../styles/individualProjectStyles'

export default function IndividualProject() {
  return (
    <IndividualProjectContainer>
      <Container>
        <AboutProject>
          <h2>Projeto 01</h2>
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
      </Container>
    </IndividualProjectContainer>
  )
}