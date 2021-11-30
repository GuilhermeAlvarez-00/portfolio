import Link from 'next/link'

import { Title } from "../../Title";
import { ProjectItem } from "./projectItem";

import { Container, MyProjectsContainer } from "./styles";

export function MyProjects() {
  return (
    <MyProjectsContainer>
      <Container>
        <Title text="Projetos" />

        <div>
          <ProjectItem
            title="Projeto 01"
            type="Website"
            slug="projeto-01"
            imgUrl="https://images.prismic.io/guilherme-portfolio/091d85fd-1486-409a-aad5-315951adc635_projetoex3.jpeg?auto=compress,format"
          />
        </div>
        <button>
          <Link href="/projetos">
            <a>Ver todos os projetos</a>
          </Link>
        </button>
      </Container>
    </MyProjectsContainer>
  )
}