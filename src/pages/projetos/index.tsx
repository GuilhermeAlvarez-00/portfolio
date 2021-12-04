import { GetStaticProps } from 'next'
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