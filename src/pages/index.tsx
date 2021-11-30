import { AboutMe } from '../components/pages/AboutMe'
import { HomeHero } from '../components/pages/HomeHero'
import { Container } from '../styles/homePageStyles'

export default function Home() {
  return (
    <Container>
      <HomeHero />
      <AboutMe />
    </Container>
  )
}