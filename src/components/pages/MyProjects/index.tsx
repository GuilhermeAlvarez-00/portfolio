import Link from 'next/link'

import { Title } from "../../Title";
import { ProjectItem } from "./projectItem";

import { Container, MyProjectsContainer } from "./styles";

interface Projects {
  slug: string;
  title: string
  url: string;
}

interface MyProjectsProps {
  projects: Projects[]
}

export function MyProjects({ projects }: MyProjectsProps) {
  return (
    <MyProjectsContainer>
      <Container>
        <Title text="Projetos" />

        <div>
          {projects && projects.slice(0, 3).map(project => (
            <ProjectItem
              title={project.title}
              type="Website"
              slug={project.slug}
              imgUrl={project.url}
            />
          ))}
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