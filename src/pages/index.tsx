import { AboutMe } from '../components/pages/AboutMe'
import { Knowledge } from '../components/pages/Knowledge'
import { HomeHero } from '../components/pages/HomeHero'
import { MyProjects } from '../components/pages/MyProjects'

import { Container } from '../styles/homePageStyles'
import { Contact } from '../components/pages/Contact'

export default function Home() {
  return (
    <Container>
      <HomeHero />
      <AboutMe />
      <MyProjects />
      <Knowledge />
      <Contact />
    </Container>
  )
}