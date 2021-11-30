import { HomeHeroContainer, Container, TextContent } from "./styles";

export function HomeHero() {
  return (
    <HomeHeroContainer>
      <Container>
        <TextContent>
          <h1><span>Olá,</span> <br /> me chamo Guilherme</h1>
          <p>Sou desenvolvedor <span>web!</span></p>
        </TextContent>

        <img src="/developer.svg" alt="" />
      </Container>
    </HomeHeroContainer>
  )
}
