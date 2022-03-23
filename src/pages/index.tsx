import { GetStaticProps } from 'next'

import { AboutMe } from '../components/sections/AboutMe'
import { HomeHero } from '../components/sections/Home'
import { getPrismicClient } from '../services/prismic'

interface HomeProps {
  about: {
    id: number
    content: {
      text: string
    }[]
  }
}

export default function Home({ about }: HomeProps) {
  return (
    <main>
      <HomeHero />
      <AboutMe about={about} />
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

  return {
    props: {
      about,
    },
    revalidate: 60 * 30, // 30 minutes
  }
}
