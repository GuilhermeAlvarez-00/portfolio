import Link from 'next/link'

import { Container, Text } from './styles'

export function ProjectItem() {
  return (
    <Link href="/projetos">
      <Container>
        <img
          src="https://cdn.dribbble.com/users/2253180/screenshots/16465396/media/1c5a46dedd6773ed61437d01437d5b8d.jpg?compress=1&resize=1200x900&vertical=top"
          alt="image"
        />
        <Text>
          <h2>OriginSix</h2>
        </Text>
      </Container>
    </Link>
  )
}

/*       <img
        src="https://cdn.dribbble.com/users/2253180/screenshots/16465396/media/1c5a46dedd6773ed61437d01437d5b8d.jpg?compress=1&resize=1200x900&vertical=top"
        alt="image"
      /> */
