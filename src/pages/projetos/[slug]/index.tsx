import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'

import { ImageSlider } from '../../../components/ImageSlider'
import { getPrismicClient } from '../../../services/prismic'

import { 
  IndividualProjectContainer, 
  Container, 
  AboutProject,
  TitleSection,
  TechnologiesProject,
  ProjectPhotos,
} from '../../../styles/individualProjectStyles'

interface PhotosPros {
  image: {
    url: string;
  },
  text: string;
  image_description: string;
}

interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  description: string;
  repository: string;
  online_project: string;
  technologies: string;
  photos: [
    {
      url: string;
      text: string;
      alt: string
    }
  ]
}

interface ProjectProps {
  project: Project
}

export default function IndividualProject({ project }: ProjectProps) {
  function handleRedirect(url: string) {
    window.open(url)
  }

  return (
    <IndividualProjectContainer>
      <Head>
        <title>{project.title} - Dev Guilherme</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta
          property="og:description"
          content={project.description}
        />
      </Head>
      <Container>
        <AboutProject>
          <TitleSection>{project.title}</TitleSection>
          <div>
            <img src={project.thumbnail} alt="Thumbnail do projeto" />
            <article>
              <p>{project.description}</p>
              <button onClick={() => handleRedirect(project.repository)}>
                Repositório
              </button>

              <button onClick={() => handleRedirect(project.online_project)}>
                Projeto online
              </button>
            </article>
          </div>
        </AboutProject>

        <TechnologiesProject>
          <TitleSection>Tecnologias</TitleSection>
          <p>{project.technologies}</p>
        </TechnologiesProject>

        <ProjectPhotos>
          <TitleSection>Fotos do projeto</TitleSection>

          <ImageSlider photos={project.photos} />
        </ProjectPhotos>
      </Container>
    </IndividualProjectContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient()
  const projects = await prismic.query([
    Prismic.Predicates.at('document.type', 'projeto')
  ])  

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (req) => {
  const prismic = getPrismicClient()
  const { slug } = req.params
  
  const response = await prismic.getByUID('projeto', String(slug), {})

  const photos = response.data.photos.map((response:  PhotosPros) => ({
    url: response.image.url,
    text: response.text,
    alt: response.image_description
  }))

  const project = {
    slug: response.uid,
    title: response.data.title,
    thumbnail: response.data.thumbnail.url,
    description: response.data.description,
    repository: response.data.repository.url,
    online_project: response.data.online_project.url,
    technologies: response.data.technologies,
    photos
  }  

  return {
    props: {
      project
    }
  }
}
