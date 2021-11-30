import { Title } from "../../Title";
import { AboutMeContainer, Container, CodeDescription } from "./styles";

export function AboutMe() {
  return (
    <AboutMeContainer>
      <Container>
        <Title text="Sobre mim" />

        <CodeDescription>
          <span>descrição:</span> {'\u007B'}
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt neque neque, eget cursus ante iaculis ac. Proin laoreet, elit a venenatis sollicitudin, nulla nulla porta diam, id sollicitudin ipsum justo non elit. Ut auctor vel velit vitae lobortis. Vivamus consectetur felis nec.  
          </div>
          {'\u007D'}
        </CodeDescription>
      </Container>
    </AboutMeContainer>
  )
}