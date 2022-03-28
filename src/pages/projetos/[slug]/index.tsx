import { GetStaticProps, GetStaticPaths } from 'next'
import Prismic from '@prismicio/client'

import { getPrismicClient } from '../../../services/prismic'
import { ProjectDescription } from '../../../components/sections/ProjectDescription'
import { Technologies } from '../../../components/sections/Technologies'

export default function IndividualProject() {
  return (
    <main>
      <ProjectDescription />
      <Technologies />
    </main>
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

  return {
    props: {},
    revalidate: 60 * 30, // 30 minutes
  }
}
