import Link from 'next/link'

import { Container } from './styles'

interface ButtonProps {
  text: string
  outline?: boolean
  path?: string
  onClick?: () => void
}

export function Button({
  text,
  path = '#',
  outline = false,
  onClick,
}: ButtonProps) {
  return (
    <Container outline={outline} onClick={onClick}>
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </Container>
  )
}
