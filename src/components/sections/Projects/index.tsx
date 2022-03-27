import { Button } from '../../Button'
import { ProjectItem } from '../../ProjectItem'
import { SectionProjects, ContainerProjects, ProjectsBox } from './styles'

interface Project {
  uid: string
  title: string
  thumbnail: {
    url: string
  }
}

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <SectionProjects>
      <ContainerProjects>
        <h2>Projetos</h2>
        <p>
          Confira alguns dos meus <span>projetos</span> abaixo.
        </p>

        <ProjectsBox>
          {projects.map((project) => (
            <ProjectItem
              key={project.uid}
              uid={project.uid}
              title={project.title}
              thumbnail={project.thumbnail.url}
            />
          ))}
        </ProjectsBox>

        <Button path="/projetos" text="Ver projetos" />
      </ContainerProjects>
    </SectionProjects>
  )
}
