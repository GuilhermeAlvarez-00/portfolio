import { ProjectItem } from '../../ProjectItem'
import { SectionProjects, ContainerProjects, ProjectsBox } from './styles'

export function Projects() {
  return (
    <SectionProjects>
      <ContainerProjects>
        <h2>Projetos</h2>
        <p>
          Confira alguns dos meus <span>projetos</span> abaixo.
        </p>

        <ProjectsBox>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </ProjectsBox>
      </ContainerProjects>
    </SectionProjects>
  )
}
