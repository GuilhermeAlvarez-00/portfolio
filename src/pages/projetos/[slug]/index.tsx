import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'

import { getPrismicClient } from '../../../services/prismic'
import { ProjectDescription } from '../../../components/sections/ProjectDescription'
import { Technologies } from '../../../components/sections/Technologies'
import { Gallery } from '../../../components/sections/Gallery'

interface IndividualProjectProps {
  project: {
    uid: string
    thumbnail: string
    title: string
    description: string
    technologies: []
    repository: string
    online_project: string
    photos: {
      image: {
        url: string
        image_description: string
      }
    }[]
  }
}

export default function IndividualProject({ project }: IndividualProjectProps) {
  return (
    <>
      <Head>
        <title>{project.title} - Dev Guilherme</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>

      <main>
        <ProjectDescription
          project={{
            thumbnail: project.thumbnail,
            title: project.title,
            description: project.description,
            repository: project.repository,
            online_project: project.online_project,
          }}
        />
        <Technologies technologies={project.technologies} />
        <Gallery photos={project.photos} />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    {}
  )

  const paths = response.results.map((project) => ({
    params: {
      slug: project.uid,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params
  const prismic = getPrismicClient()

  const response = await prismic.getByUID('projeto', String(slug), {})

  const project = {
    uid: response.uid,
    thumbnail: response.data.thumbnail.url,
    title: response.data.title,
    description: response.data.description,
    technologies: response.data.technologies,
    repository: response.data.repository.url,
    online_project: response.data.online_project.url,
    photos: response.data.photos.map((photo) => ({
      image: {
        url: photo.image.url,
        image_description: photo.image_description,
      },
    })),
  }

  return {
    props: {
      project,
    },
    revalidate: 60 * 30, // 30 minutes
  }
}
