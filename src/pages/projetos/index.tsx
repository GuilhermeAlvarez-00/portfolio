import { AllProjects } from '../../components/pages/AllProjects'
import { Container } from '../../styles/allProjectsPageStyles'

export default function Projects() {
  return (
    <Container>
      <section>
        <AllProjects
          title="Projeto 01"
          type="Website"
          slug="projeto-01"
          imgUrl="https://images.prismic.io/guilherme-portfolio/091d85fd-1486-409a-aad5-315951adc635_projetoex3.jpeg?auto=compress,format"
        />

        <AllProjects
          title="Projeto 01"
          type="Website"
          slug="projeto-01"
          imgUrl="https://images.prismic.io/guilherme-portfolio/091d85fd-1486-409a-aad5-315951adc635_projetoex3.jpeg?auto=compress,format"
        />

        <AllProjects
          title="Projeto 01"
          type="Website"
          slug="projeto-01"
          imgUrl="https://images.prismic.io/guilherme-portfolio/091d85fd-1486-409a-aad5-315951adc635_projetoex3.jpeg?auto=compress,format"
        />
      </section>
    </Container>
  )
}