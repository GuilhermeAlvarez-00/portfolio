import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'

import { ProjectItem } from '../../components/ProjectItem'
import { getPrismicClient } from '../../services/prismic'

import {
  Container,
  SectionAllProjects,
  ContainerAllProjects,
} from '../../styles/projectStyles'

interface AllProjectsProps {
  projects: {
    uid: string
    title: string
    thumbnail: {
      url: string
    }
  }[]
}

export default function AllProjects({ projects }: AllProjectsProps) {
  return (
    <>
      <Head>
        <title>Projetos - Dev Guilherme</title>
        <meta
          name="description"
          content="Aqui você pode encontrar todos os projetos que ja desenvolvi"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui você pode encontrar todos os projetos que ja desenvolvi"
        />
      </Head>
      <Container>
        <SectionAllProjects>
          <ContainerAllProjects>
            {projects.map((project) => (
              <ProjectItem
                key={project.uid}
                uid={project.uid}
                title={project.title}
                thumbnail={project.thumbnail.url}
              />
            ))}
          </ContainerAllProjects>
        </SectionAllProjects>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    {}
  )

  const projects = response.results.map((project) => ({
    uid: project.uid,
    title: project.data.title,
    thumbnail: project.data.thumbnail,
  }))

  return {
    props: {
      projects,
    },
    revalidate: 60 * 30, // 30 minutes
  }
}
