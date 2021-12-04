import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'

import { AboutMe } from '../components/pages/AboutMe'
import { Knowledge } from '../components/pages/Knowledge'
import { HomeHero } from '../components/pages/HomeHero'
import { MyProjects } from '../components/pages/MyProjects'
import { Contact } from '../components/pages/Contact'
import { getPrismicClient } from '../services/prismic'

import { Container } from '../styles/homePageStyles'

interface Projects {
  slug: string;
  title: string
  url: string;
}

interface HomeProps {
  projects: Projects[]
}

export default function Home({ projects }: HomeProps) {
  return (
    <Container>
      <HomeHero />
      <AboutMe />
      <MyProjects
        projects={projects}
      />
      <Knowledge />
      <Contact />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date] desc' }
  )

  const projects = response.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    url: project.data.thumbnail.url 
  }))

  return {
    props: {
      projects
    },
    revalidate: 86400 // 24 hours
  }

}
