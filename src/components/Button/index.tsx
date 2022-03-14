import Link from 'next/link'

import { Container } from './styles'

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <Container>
      <Link href="/projetos">
        <a>{text}</a>
      </Link>
    </Container>
  )
}
