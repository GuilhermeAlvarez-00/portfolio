import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'

import { AboutMe } from '../components/sections/AboutMe'
import { HomeHero } from '../components/sections/Home'
import { Projects } from '../components/sections/Projects'
import { getPrismicClient } from '../services/prismic'
import { Knowledges } from '../components/sections/Knowledges'

interface HomeProps {
  about: {
    id: number
    content: {
      text: string
    }[]
  }
  projects: {
    uid: string
    title: string
    thumbnail: {
      url: string
    }
  }[]
}

export default function Home({ about, projects }: HomeProps) {
  return (
    <main>
      <HomeHero />
      <AboutMe about={about} />
      <Projects projects={projects} />
      <Knowledges />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const aboutResponse = await prismic.getSingle('sobre', {})
  const about = {
    id: aboutResponse.id,
    content: [...aboutResponse.data.content],
  }

  const projectsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { pageSize: 4 }
  )
  const projects = projectsResponse.results.map((project) => ({
    uid: project.uid,
    title: project.data.title,
    thumbnail: project.data.thumbnail,
  }))

  return {
    props: {
      about,
      projects,
    },
    revalidate: 60 * 30, // 30 minutes
  }
}
