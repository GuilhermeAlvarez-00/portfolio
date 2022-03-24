import Link from 'next/link'

import { Container, Text } from './styles'

interface ProjectItemProps {
  uid: string
  title: string
  thumbnail: string
}

export function ProjectItem({ uid, title, thumbnail }: ProjectItemProps) {
  return (
    <Link href={`/projetos/${uid}`}>
      <Container>
        <img src={thumbnail} alt="image" />
        <Text>
          <h2>{title}</h2>
        </Text>
      </Container>
    </Link>
  )
}
