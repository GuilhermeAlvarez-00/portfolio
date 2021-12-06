import { HomeHeroContainer, Container, TextContent } from "./styles";

export function HomeHero() {
  return (
    <HomeHeroContainer>
      <Container>
        <TextContent data-aos="fade-right">
          <h1><span>Olá,</span> <br /> me chamo Guilherme</h1>
          <p>Sou desenvolvedor <span>web!</span></p>
        </TextContent>

        <img src="/developer.svg" alt="" data-aos="fade-left"/>
      </Container>
    </HomeHeroContainer>
  )
}
