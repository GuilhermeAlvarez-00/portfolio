import { AboutMe } from '../components/pages/AboutMe'
import { HomeHero } from '../components/pages/HomeHero'
import { MyProjects } from '../components/pages/MyProjects'

import { Container } from '../styles/homePageStyles'

export default function Home() {
  return (
    <Container>
      <HomeHero />
      <AboutMe />
      <MyProjects />
    </Container>
  )
}