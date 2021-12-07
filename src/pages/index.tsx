import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { AboutMe } from '../components/pages/AboutMe'
import { Knowledge } from '../components/pages/Knowledge'
import { HomeHero } from '../components/pages/HomeHero'
import { MyProjects } from '../components/pages/MyProjects'
import { Contact } from '../components/pages/Contact'
import { getPrismicClient } from '../services/prismic'

import { Container } from '../styles/homePageStyles'
import { useEffect } from 'react'

interface Projects {
  slug: string;
  title: string
  url: string;
}

interface HomeProps {
  projects: Projects[],
  about: string;
}

export default function Home({ projects, about }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Container>
      <Head>
        <title>Início - Dev Guilherme</title>
        <meta name="description" content="Sou desenvolvedor front-end e esse é meu portfólio onde voçê pode conhecer mais de mim, ver os projetos que ja desenvolvi e caso tenha interesse em meus serviços é só deixar uma mensagem no formulário abaixo" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou desenvolvedor front-end e esse é meu portfólio onde voçê pode conhecer mais de mim, ver os projetos que ja desenvolvi e caso tenha interesse em meus serviços é só deixar uma mensagem no formulário abaixo"
        />
      </Head>
      <HomeHero />
      <AboutMe about={about}/>
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

  const aboutResponse = await prismic.getSingle('sobre', {})

  const about = aboutResponse.data.content

  const projects = response.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    url: project.data.thumbnail.url 
  }))

  return {
    props: {
      projects,
      about
    },
    revalidate: 86400 // 24 hours
  }

}
