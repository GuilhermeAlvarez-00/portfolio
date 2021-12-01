import Link from 'next/link'

import { Container } from './styles'

interface AllProjectsProps {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
}

export function AllProjects({
  title,
  type,
  slug,
  imgUrl
}: AllProjectsProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  )
}