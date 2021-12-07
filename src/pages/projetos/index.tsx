import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'

import { AllProjects } from '../../components/pages/AllProjects'

import { Container } from '../../styles/allProjectsPageStyles'

interface Projects {
  slug: string;
  title: string;
  url: string;
}

interface ProjectsProps {
  projects: Projects[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <Head>
        <title>Projetos - Dev Guilherme</title>
        <meta name="description" content="Aqui você pode encontrar todos os projetos que ja desenvolvi" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui você pode encontrar todos os projetos que ja desenvolvi"
        />
      </Head>
      <section>
        {projects.map(project => (
          <AllProjects
            key={project.slug}
            title={project.title}
            type="Website"
            slug={project.slug}
            imgUrl={project.url}
          />
        ))}
      </section>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
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