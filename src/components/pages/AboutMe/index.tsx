import { Title } from "../../Title";
import { AboutMeContainer, Container, CodeDescription } from "./styles";

interface AboutmeProps {
  about: string;
}

export function AboutMe({ about }: AboutmeProps) {
  return (
    <AboutMeContainer>
      <Container data-aos="fade-up">
        <Title text="Sobre mim" />

        <CodeDescription>
          <span>descrição:</span> {'\u007B'}
          <div>
            {about}
          </div>
          {'\u007D'}
        </CodeDescription>
      </Container>
    </AboutMeContainer>
  )
}