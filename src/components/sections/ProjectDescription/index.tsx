import Image from "next/image";
import { Button } from "../../Button";
import {
  SectionProjectDescription,
  ContainerProjectDescription,
  CardProjectDetails,
  TextContent,
  ImageWrapper,
} from "./styles";

interface ProjectDescriptionProps {
  project: {
    thumbnail: string;
    title: string;
    description: string;
    repository: string;
    online_project: string;
  };
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  return (
    <SectionProjectDescription>
      <ContainerProjectDescription>
        <CardProjectDetails>
          <ImageWrapper>
            <Image
              src={project.thumbnail}
              alt={`Thumbnail do projeto ${project.title}`}
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>

          <TextContent>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div>
              <Button
                path={project.online_project}
                text="Projeto online"
                otherWindow
              />
              <Button
                path={project.repository}
                outline
                text="Repositório"
                otherWindow
              />
            </div>
          </TextContent>
        </CardProjectDetails>
      </ContainerProjectDescription>
    </SectionProjectDescription>
  );
}

