import { Button } from '../../Button'
import {
  SectionProjectDescription,
  ContainerProjectDescription,
  CardProjectDetails,
  TextContent,
} from './styles'

interface ProjectDescriptionProps {
  project: {
    thumbnail: string
    title: string
    description: string
    repository: string
    online_project: string
  }
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  function handleRedirect(url: string) {
    window.open(url)
  }

  return (
    <SectionProjectDescription>
      <ContainerProjectDescription>
        <CardProjectDetails>
          <img
            src={project.thumbnail}
            alt={`Thumbnail do projeto ${project.title}`}
          />

          <TextContent>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div>
              <Button
                text="Projeto online"
                onClick={() => handleRedirect(project.online_project)}
              />
              <Button
                outline
                text="Repositório"
                onClick={() => handleRedirect(project.repository)}
              />
            </div>
          </TextContent>
        </CardProjectDetails>
      </ContainerProjectDescription>
    </SectionProjectDescription>
  )
}
